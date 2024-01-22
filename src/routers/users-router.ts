import userController from '@/controllers/users-controller';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/', userController.post).get('/', userController.get);

export default userRouter;
