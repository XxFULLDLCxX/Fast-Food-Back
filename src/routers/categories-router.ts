import categoriesController from '@/controllers/categories-controller';
import { Router } from 'express';

const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.get);

export default categoriesRouter;
