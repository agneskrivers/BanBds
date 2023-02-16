// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
    require('module-alias/register');
}

import express, { json, urlencoded } from 'express';
import next from 'next';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { connect, connection } from 'mongoose';

// Setup
import address from './address';

// APIs
import apis from '@server/apis';

// Configs
import {
    MongoURI,
    SecretCookie,
    SecretSession,
    MongoStoreURI,
} from '@server/configs';

// Controllers
import controllers from '@server/controllers';

// Declare
declare module 'express-session' {
    interface SessionData {
        posts: number[];
        projects: number[];
        news: string[];
        views: number;
    }
}

// MongoDB
connect(MongoURI);
connection.on('error', console.error.bind(console, 'Connect MongoDB Error:'));
connection.once('open', () => console.log('MongoDB is connecting!'));

const port = process.env.PORT || 1998;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const appHandler = app.getRequestHandler();

address()
    .then(() => {
        app.prepare()
            .then(() => {
                const server = express();

                // Server Use
                server.use(cors());
                server.use(json());
                server.use(urlencoded({ extended: true }));
                server.use(cookieParser(SecretCookie));
                server.use(
                    session({
                        secret: SecretSession,
                        cookie: {
                            maxAge: 21600000,
                            secure: process.env.NODE_ENV === 'production',
                        },
                        resave: false,
                        saveUninitialized: false,
                        store: new MongoStore({ mongoUrl: MongoStoreURI }),
                    })
                );
                server.use(helmet({ contentSecurityPolicy: false }));

                if (dev) {
                    server.use(morgan('dev'));
                }

                // Use
                server.use('/api-gateway', apis);
                server.use(express.static(path.join(process.cwd(), 'public')));

                // Get
                server.get('/img/news/:image', controllers.news);
                server.get('/img/projects/:image', controllers.projects);
                server.get('/temp/:image', controllers.temp);

                server.get('/test', function (req, res) {
                    if (req.session.views) {
                        req.session.views++;
                        res.setHeader('Content-Type', 'text/html');
                        res.write('<p>views: ' + req.session.views + '</p>');
                        res.end();
                    } else {
                        req.session.views = 1;
                        res.end('welcome to the session demo. refresh!');
                    }
                });

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
    })
    .catch((error) => {
        const { message } = error as Error;

        console.log(`Server Error: ${message}`);

        process.exit(1);
    });
