import productsController from '@/controllers/products-controller';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', productsController.get).get('/:id/additionals', productsController.getAdditionals);

export default productsRouter;
