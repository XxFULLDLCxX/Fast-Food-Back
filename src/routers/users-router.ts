import { Router } from "express";
import userController from "@/controllers/users-controller";

const userRouter = Router();

userRouter.post("/", userController.post).get("/", userController.get);

export default userRouter;
