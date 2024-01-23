import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import AppError from "@/utils/protocols/errors";

function errorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.log(err);

  const validCode = Object.values(httpStatus).includes(err.code);
  const code = validCode ? err.code : httpStatus.INTERNAL_SERVER_ERROR;

  return res.status(code).send(err.message || "Erro interno do servidor.");
}

export default errorHandler;
