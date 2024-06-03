import type {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


 export interface CustomRequest extends Request {
    email: string;
    id: string;
}

export const verifyJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log(token);
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
    jwt.verify(token, process.env.ACCESS_TOKEN as string, (err, decoded: {id: string, email: string}) => {
        if(err) return res.status(403).json({message: "Invalid token"});
        req.email = decoded.email;
        req.id = decoded.id;
        next();
    } );

   
};