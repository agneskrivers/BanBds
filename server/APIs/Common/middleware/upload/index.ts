import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Configs
import { pathTemp, ValidExtname } from '@server/configs';

// Helpers
import { generateFileName } from '@server/helpers/Common';

// Interfaces
import type { ResUploadImageJSON } from '@interfaces';

// Function Type
type CommonMiddlewareUpload = (
    req: Request,
    res: Response<ResUploadImageJSON>,
    next: NextFunction
) => void;

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    fileFilter: (_req, file, cb) => {
        const ext = path.extname(file.originalname);

        if (ValidExtname.indexOf(ext) < 0)
            return cb(new Error('Invalid format!'));

        const name = generateFileName(file.originalname);
        file.filename = name;

        cb(null, true);
    },
    limits: {
        fieldNameSize: 100,
        fileSize: 10485760,
    },
}).single('file');

const Index: CommonMiddlewareUpload = (req, res, next) => {
    upload(req, res, (error) => {
        const file = req.file;

        if (!file) {
            res.status(202).json({
                status: 'Not Process',
                message: 'NotFound',
            });

            return;
        }

        if (error instanceof multer.MulterError) {
            res.status(202).json({ status: 'ImageToBig' });

            return;
        } else if (error) {
            res.status(202).json({ status: 'ImageFormat' });

            return;
        }

        fs.access(pathTemp, (error) => {
            if (error && error.code === 'ENOENT') {
                fs.mkdirSync(pathTemp);
            }

            const filePath = path.join(pathTemp, file.filename);
            const buffer = file.buffer;
            fs.writeFileSync(filePath, buffer);
        });

        next();
    });
};

export default Index;
