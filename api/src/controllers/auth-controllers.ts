import type {Request, Response} from 'express';
import bcrypt from 'bcrypt';

import { createUser, getUserByEmail } from '../model/user-models';

export const createAdmin = async (req: Request, res: Response) => {
    const {
        email,
        name,
        password
    } = req.body;

    if(!email || !name || !password) {
        return res.json({success: false, data: {body: null, error: "Missing credentials"}});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { email, name, hashedPassword, authentication: {refreshToken: ''} };

    //check whether user exists
    const isUserRegistered = await getUserByEmail(email);


    //save user to database
    try {
        const returnedUser = await createUser("Admin", userData);
        
        if(!returnedUser) {
            return res.status(500).send({success: false, data: {body: null, error: "internal server error"}})
        };

        const {hashedPassword: pass, ...rest} = returnedUser.toObject();

        return res.json({success: true, data: {body: rest,error: null}});

    } catch (error: any) {
        return res.json({success: false, data: {body: null, error: error.message}});
    }


}