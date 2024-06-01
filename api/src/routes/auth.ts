import {Router} from 'express';
import {createAdmin, createNormalUser, loginAdmin} from '../controllers/auth-controllers';

const authRouter = Router();

authRouter.route('/register/admin').post(createAdmin);
authRouter.route('/register/user').post(createNormalUser);
authRouter.route('/login/admin').post(loginAdmin);


export {authRouter};