import {NextFunction, Request, Response} from 'express';

import { loggerFunction } from '../utils/logger';

 export const eventLogger = (req:Request, res: Response, next: NextFunction ) => {
    loggerFunction(`${req.method}\t ${req.url}\t ${req.headers.origin}`, 'reqLog.txt');
    next();
};