if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('dotenv').config();
}

if (process.env.NODE_ENV === 'production') {
    require('module-alias/register');
}

import express, { json, urlencoded } from 'express';
import next from 'next';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { connect, connection } from 'mongoose';

// APIs
import apis from '@server/apis';

// Configs
import { MongoURI } from '@server/configs';

// MongoDB
connect(MongoURI);
connection.on('error', console.error.bind(console, 'Connect MongoDB Error:'));
connection.once('open', () => console.log('MongoDB is connecting!'));

const port = process.env.PORT || 1998;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const appHandler = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        // Server Use
        server.use(cors());
        server.use(json());
        server.use(urlencoded({ extended: true }));
        server.use(helmet());

        if (dev) {
            server.use(morgan('dev'));
        }

        server.use('/api-gateway', apis);

        server.all('*', (req, res) => appHandler(req, res));

        server.listen(port, () =>
            console.log(`Server running is port ${port}`)
        );
    })
    .catch((error) => {
        const { message } = error as Error;

        console.log(`Server Error: ${message}`);

        process.exit(1);
    });
