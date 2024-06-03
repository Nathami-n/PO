import {Router} from 'express';
import {createAdmin, createNormalUser, loginAdmin} from '../controllers/auth-controllers';
import { verifyJWT } from '../middleware/jwt';

const authRouter = Router();

authRouter.route('/register/admin').post(createAdmin);
authRouter.route('/register/user').post(createNormalUser);
authRouter.route('/login/admin').post(verifyJWT, loginAdmin);


export {authRouter};