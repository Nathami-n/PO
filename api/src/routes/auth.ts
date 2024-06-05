import {Router} from 'express';
import {registerUser, loginUser} from '../controllers/auth-controllers';
import { verifyJWT } from '../middleware/jwt';
import { refreshAdminToken } from '../controllers/refresh-token';

const authRouter = Router();

authRouter.route('/register').post(registerUser);

authRouter.route('/login').post(loginUser);
authRouter.route('/login/refresh').post(refreshAdminToken);


export {authRouter};