import { prisma } from '@/config';
import { OrderAdditionalsParams, OrderParams } from '@/utils/protocols/orders';

const create = async (params: OrderParams) => {
  return prisma.order.create({ data: params });
};

const createAdditional = async (params: OrderAdditionalsParams) => {
  return prisma.orderAdditional.create({ data: params });
};

const readAdditionals = async (orderId: number) => {
  return prisma.orderAdditional.findMany({ where: { orderId }, include: { additional: true } });
};

const findFirst = (productId: number) => {
  return prisma.order.findFirst({ where: { productId } });
};

const findMany = () => {
  return prisma.order.findMany({});
};

const findManyByCode = (code: number) => {
  return prisma.order.findMany({ where: { code }, include: { products: true } });
};

export const orderRepositoy = {
  createAdditional,
  readAdditionals,
  findManyByCode,
  findFirst,
  findMany,
  create,
};
