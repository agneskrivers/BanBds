import { Request, Response } from 'express';
import createHttpError from 'http-errors';

// Helpers
import { handleError } from '@server/helpers';

// Models
import { DistrictsModel } from '@server/models';

// Interfaces
import type { ResJSON, IDistrict } from '@interfaces';

// Function Type
type ApiAppDistricts = (
    req: Request,
    res: Response<ResJSON<IDistrict[]>>
) => Promise<void>;

const Index: ApiAppDistricts = async (_, res) => {
    try {
        const data = await DistrictsModel.getList();

        if (!data) {
            const { statusCode, message } = new createHttpError.BadRequest();

            res.status(statusCode).json({ status: 'Not Process', message });

            return;
        }

        res.status(200).json({ status: 'Success', data });
    } catch (error) {
        const { message } = error as Error;

        handleError('API App Districts', message);

        const status = new createHttpError.InternalServerError();

        res.status(status.statusCode).json({
            status: 'Error',
            error: status.message,
        });
    }
};

export default Index;
