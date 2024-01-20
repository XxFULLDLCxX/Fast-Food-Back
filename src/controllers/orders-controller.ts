import orderService from '@/services/orders-service';
import { OrderParams } from '@/utils/protocols/orders';
import { Request, Response } from 'express';

async function get(_req: Request, res: Response) {
  const result = await orderService.read();
  return res.send(result);
}

async function post(req: Request, res: Response) {
  const result = await orderService.create(req.body as OrderParams)
  return res.send(result);
}

const ordersController = { get, post };

export default ordersController;
