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
    const isUserRegistered = await getUserByEmail("Admin", email);
    if(isUserRegistered || isUserRegistered !== null) {
        return res.json({success: false, data: {body: null, error: "Already registered"}});
    }

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


};

export const createNormalUser = async (req: Request, res: Response) => {
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
    const isUserRegistered = await getUserByEmail("User", email);
    if(isUserRegistered || isUserRegistered !== null) {
        return res.json({success: false, data: {body: null, error: "Already registered"}});
    };

    try {
        const returnedUser = await createUser("User", userData);
        
        if(!returnedUser) {
            return res.status(500).send({success: false, data: {body: null, error: "internal server error"}})
        };

        const {hashedPassword: pass, ...rest} = returnedUser.toObject();

        return res.json({success: true, data: {body: rest,error: null}});

    } catch (error: any) {
        return res.json({success: false, data: {body: null, error: error.message}});
    }


};

export const loginAdmin =  async (req: Request, res: Response) => {
    const {email, password} = req.body;
    
    if(!email || !password) return res.json({success: false, data: {body: null, error: "Please input values"}});
    
    //check whether the user exists in database
    const isUserFound = await getUserByEmail("Admin", email);
    if(!isUserFound) {
        return res.json({success: false, data: {body: null, error: "Not allowed"}});
    };
    
    //check password
    const isPasswordValid = bcrypt.compare(password, isUserFound.hashedPassword);
    //generate jwt tokens

}