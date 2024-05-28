import type {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Admin } from 'interfaces/project-interfaces';
export const createAdmin = async (req: Request, res: Response) => {
    const {
        email,
        name,
        password
    }: Admin = req.body;

    if(!email || !name || !password) {
        return res.json({success: false, data: {body: null, error: "Missing credentials"}});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //generate access token


}