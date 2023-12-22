import AppError from '@/utils/protocols/errors';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

function errorHandler(err: AppError, _req: Request, res: Response, _next: NextFunction) {
  return res.status(err.code || httpStatus.INTERNAL_SERVER_ERROR).send(err.message || 'Erro interno do servidor.');
}

export default errorHandler
