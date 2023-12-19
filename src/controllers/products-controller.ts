import productService from '@/services/products-service';
import { ProductQuery } from '@/utils/protocols/products';
import { Request, Response } from 'express';

async function get(req: Request, res: Response) {
  const result = await productService.read(req.query as ProductQuery);
  return res.send(result);
}

const productsController = { get };

export default productsController;
