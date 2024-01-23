import userService from '@/services/users-service';
import { UserParams } from '@/utils/protocols/users';
import { Request, Response } from 'express';

async function get(_req: Request, res: Response) {
  const result = await userService.read();
  return res.send(result);
}

async function post(req: Request, res: Response) {
  const result = await userService.create(req.body as UserParams);
  return res.send(result);
}

const userController = { get, post };

export default userController;
