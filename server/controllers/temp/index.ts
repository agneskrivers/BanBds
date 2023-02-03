import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// Configs
import { pathTemp } from '@server/configs';

// Request Interface
interface ReqParams {
    image: string;
}

// Function Type
type ControllerTemp = (req: Request<ReqParams>, res: Response) => void;

const Index: ControllerTemp = (req, res) => {
    const { image } = req.params;

    const file = fs.createReadStream(path.join(pathTemp, image));

    file.on('open', () => {
        res.set('Content-Type', 'image/webp');

        file.pipe(res);
    });
    file.on('error', () => {
        res.set('Content-Type', 'text/plain');

        res.status(404).end('Not found');
    });
};

export default Index;
