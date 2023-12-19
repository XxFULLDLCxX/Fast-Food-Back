import productsController from '@/controllers/products-controller';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', productsController.get);

export default productsRouter;
