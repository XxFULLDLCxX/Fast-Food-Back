import { Router } from "express";
import productsController from "@/controllers/products-controller";

const productsRouter = Router();

productsRouter
  .get("/", productsController.get)
  .get("/:id/additionals", productsController.getAdditionals);

export default productsRouter;
