import type {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


interface CustomRequest extends Request {
    email: string;
    id: string;
}

export const verifyJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1] || req.headers["authorization"].split("")[1];

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
        if(err) return res.sendStatus(403);
        req.email = decoded.email;
        req.id = decoded.id;
        next();
    } );

   
};