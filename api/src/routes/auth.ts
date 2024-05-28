import {Router} from 'express';
import {createAdmin} from '../controllers/auth-controllers';

const authRouter = Router();

authRouter.route('/admin').post(createAdmin);


export {authRouter};