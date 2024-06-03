import {NextFunction, Request, Response} from 'express';

import { loggerFunction } from '../utils/logger';

const eventLogger = (req:Request, res: Response, next: NextFunction ) => {
    loggerFunction(`${req.method}\t ${req.url}\t ${req.headers.origin}`, 'reqLog.txt');

}