import { prisma } from '@/config';
import { UserParams } from '@/utils/protocols/users';

const upsert = (params: UserParams) => {
  return prisma.user.create({ data: params });
};

const create = (params: UserParams) => {
  return prisma.user.create({ data: params });
};

const update = (params: UserParams, id: number) => {
  return prisma.user.update({ data: params, where: { id } });
};

const findMany = () => {
  return prisma.user.findMany({});
};

export const userRepositoy = {
  create,
  update,
  upsert,
  findMany,
};
