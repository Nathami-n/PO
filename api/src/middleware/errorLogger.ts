import {NextFunction, Request, Response } from 'express';
import {loggerFunction} from '../utils/logger';


export const errorLogMiddleware = (req: Request, res: Response, err: any, next: NextFunction) => {
    loggerFunction(`${err.name}: ${err.message}`, 'errLog.txt');
    console.error(err.stack);
    res.status(500).send(err.message);
   
}
