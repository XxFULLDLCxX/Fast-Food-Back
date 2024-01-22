import { userRepositoy } from '@/repositories/users-repository';
import { UserParams } from '@/utils/protocols/users';

const read = async () => {
  return userRepositoy.findMany();
};

const create = async (params: UserParams) => {
  return userRepositoy.create(params);
};

const upsert = async (params: UserParams) => {
  return userRepositoy.upsert(params);
};

const userService = {
  read,
  create,
  upsert,
};

export default userService;
