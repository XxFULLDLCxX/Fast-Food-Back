import { Router } from "express";
import categoriesController from "@/controllers/categories-controller";

const categoriesRouter = Router();

categoriesRouter
  .get("/", categoriesController.getMany)
  .get("/:id", categoriesController.getFirst);

export default categoriesRouter;
