import categoriesController from '@/controllers/categories-controller';
import { Router } from 'express';

const categoriesRouter = Router();

categoriesRouter
  .get('/', categoriesController.getMany)
  .get('/:id', categoriesController.getFirst);

export default categoriesRouter;
