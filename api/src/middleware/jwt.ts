import type {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export const verifyJWT = (req:Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(404).json({
            success: false,
            data: {
                body: null,
                error: "No token present"
            }
        })
    };

    //decode the token 
    const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN as string);

    //find the user associated with the token 
    


};