//global imports
import {createServer} from 'http';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import {delegateFunction} from './config/cors-config';
import {PORT, mongoUri} from './config/connection';
import {makeConnection} from './db/mongo';
import {authRouter} from "./routes/auth";
import { eventLogger } from './middleware/eventLogger';
import { errorLogMiddleware } from './middleware/errorLogger';

//app
const app = express();
const server = createServer(app);

//middleware
app.use(express.json());
app.use(eventLogger)
app.use(cors(delegateFunction));
app.use(compression());
app.use(cookieParser());
// app.use(errorLogMiddleware);


//authentication
app.use('/auth', authRouter);



const startServer =  async () => {
    try {
        await makeConnection(mongoUri);
        server.listen(PORT, () => console.log(`server started on port ${PORT}`));
        
    } catch (error) {
        console.error(error);
    }
}


startServer();
