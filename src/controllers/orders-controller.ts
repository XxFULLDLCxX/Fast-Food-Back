import { Request, Response } from "express";
import orderService from "@/services/orders-service";
import { OrderAdditionalsParams, OrderParams } from "@/utils/protocols/orders";

async function get(_req: Request, res: Response) {
  const result = await orderService.read();
  return res.send(result);
}

async function getByCode(req: Request, res: Response) {
  const result = await orderService.readByCode(
    Number(req.params.code) as number,
  );
  return res.send(result);
}

async function post(req: Request, res: Response) {
  const result = await orderService.create(req.body as OrderParams);
  return res.send(result);
}

async function postAdditional(req: Request, res: Response) {
  const result = await orderService.createAdditional(
    req.body as OrderAdditionalsParams,
  );
  return res.send(result);
}

const ordersController = { get, post, getByCode, postAdditional };

export default ordersController;
