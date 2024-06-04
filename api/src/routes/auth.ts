import {Router} from 'express';
import {createAdmin, createNormalUser, loginAdmin} from '../controllers/auth-controllers';
import { verifyJWT } from '../middleware/jwt';
import { refreshAdminToken } from '../controllers/refresh-token';

const authRouter = Router();

authRouter.route('/register/admin').post(createAdmin);
authRouter.route('/register/user').post(createNormalUser);
authRouter.route('/login/admin').post( loginAdmin);
authRouter.route('/login/admin/refresh').post(refreshAdminToken);


export {authRouter};