import {Router} from 'express';
import {createAdmin, createNormalUser} from '../controllers/auth-controllers';

const authRouter = Router();

authRouter.route('/admin').post(createAdmin);
authRouter.route('/user').post(createNormalUser);


export {authRouter};