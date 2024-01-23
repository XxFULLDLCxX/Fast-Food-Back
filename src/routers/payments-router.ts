import { Router } from "express";
import paymentController from "@/controllers/payments-controller";

const paymentRouter = Router();

paymentRouter.post("/", paymentController.post).get("/", paymentController.get);

export default paymentRouter;
