import orderController from '@/controllers/orders-controller';
import { Router } from 'express';

const orderRouter = Router();

orderRouter.post('/', orderController.post).get('/', orderController.get);

export default orderRouter;
