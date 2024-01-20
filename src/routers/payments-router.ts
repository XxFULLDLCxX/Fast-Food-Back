import paymentController from '@/controllers/payments-controller';
import { Router } from 'express';

const paymentRouter = Router();

paymentRouter.post('/', paymentController.post).get('/', paymentController.get);

export default paymentRouter;
