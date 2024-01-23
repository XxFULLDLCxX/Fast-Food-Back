import { Request, Response } from "express";
import categoryService from "@/services/categories-service";

async function getMany(_req: Request, res: Response) {
  const result = await categoryService.readMany();
  return res.send(result);
}
async function getFirst(req: Request, res: Response) {
  const result = await categoryService.readFirst(Number(req.params.id));
  return res.send(result);
}
const categoriesController = { getMany, getFirst };
export default categoriesController;
