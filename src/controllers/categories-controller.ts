import categoryService from '@/services/categories-service';
import { Request, Response } from 'express';

async function get(_req: Request, res: Response) {
  const result = await categoryService.read();
  return res.send(result);
}

const categoriesController = { get };
export default categoriesController;
