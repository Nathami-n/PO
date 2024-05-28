import type {Request, Response} from 'express';
import bcrypt from 'bcrypt';

import { Admin } from 'interfaces/project-interfaces';
export const createAdmin = async (req: Request, res: Response) => {
    const {
        email,
        name,
        password
    }: Admin = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    //generate access token
    

}