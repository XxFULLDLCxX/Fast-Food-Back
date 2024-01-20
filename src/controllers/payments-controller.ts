import paymentService from '@/services/payments-service';
import { PaymentParams } from '@/utils/protocols/payments';
import { Request, Response } from 'express';

async function get(_req: Request, res: Response) {
  const result = await paymentService.read();
  return res.send(result);
}

async function post(req: Request, res: Response) {
  const result = await paymentService.upsert(req.body as PaymentParams)
  return res.send(result);
}

const paymentController = { get, post };

export default paymentController;
