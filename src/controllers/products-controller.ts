import { Request, Response } from "express";
import productService from "@/services/products-service";
import { ProductQuery } from "@/utils/protocols/products";

async function get(req: Request, res: Response) {
  const result = await productService.read(req.query as ProductQuery);
  return res.send(result);
}

async function getAdditionals(req: Request, res: Response) {
  const result = await productService.readAdditionals(Number(req.params.id));
  return res.send(result);
}

const productsController = { get, getAdditionals };

export default productsController;
