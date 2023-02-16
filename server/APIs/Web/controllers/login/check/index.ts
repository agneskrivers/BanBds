import { Request, Response } from 'express';
import createHttpError from 'http-errors';

// Helpers
import { handleError } from '@server/helpers';

// Models
import { OTPsModel, UsersModel } from '@server/models';

// Interfaces
import type {
    ResJSON,
    IApiReqParamsPhoneNumber,
    IApiLoginCheckReqBody,
} from '@interfaces';

// Function Type
type ApiWebLoginCheck = (
    req: Request<IApiReqParamsPhoneNumber, unknown, IApiLoginCheckReqBody>,
    res: Response<ResJSON<boolean>>
) => Promise<void>;

const Index: ApiWebLoginCheck = async (req, res) => {
    const { phoneNumber } = req.params;

    const { otp } = req.body;

    try {
        const checkPhoneNumber = await OTPsModel.findOne({ phoneNumber });

        if (!checkPhoneNumber) {
            const { statusCode, message } = new createHttpError.BadRequest();

            res.status(statusCode).json({ status: 'Not Process', message });

            return;
        }

        const isOTP = await checkPhoneNumber.check(otp);

        if (!isOTP) {
            const { statusCode, message } = new createHttpError.BadRequest();

            res.status(statusCode).json({ status: 'Not Process', message });

            return;
        }

        const checkUser = await UsersModel.findOne({ phoneNumber });

        if (!checkUser) {
            res.status(200).json({
                status: 'Success',
                data: false,
            });

            return;
        }

        const token = await checkUser.generateToken('app');

        if (!token) {
            res.status(202).json({ status: 'Not Process', message: 'Token' });

            return;
        }

        res.status(200)
            .cookie('user', token, {
                httpOnly: true,
                sameSite: 'lax',
                secure: true,
                signed: true,
            })
            .json({
                status: 'Success',
                data: true,
            });
    } catch (error) {
        const { message } = error as Error;

        handleError('API Web Login Check', message);

        const status = new createHttpError.InternalServerError();

        res.status(status.statusCode).json({
            status: 'Error',
            error: status.message,
        });
    }
};

export default Index;
