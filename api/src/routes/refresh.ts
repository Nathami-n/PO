import { refreshAdminToken, refreshUserToken } from '../controllers/refresh-token';
import {Router} from 'express';

 const router = Router();

router.get('/admin', refreshAdminToken);
router.get('/user', refreshUserToken);

 export default router;

