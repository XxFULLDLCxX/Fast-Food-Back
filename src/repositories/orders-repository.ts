import { prisma } from "@/config";
import { OrderAdditionalsParams, OrderParams } from "@/utils/protocols/orders";

const create = async (params: OrderParams) => {
  return prisma.order.create({ data: params });
};

const createAdditional = async (params: OrderAdditionalsParams) => {
  return prisma.orderAdditional.create({ data: params });
};

const findFirst = (productId: number) => {
  return prisma.order.findFirst({ where: { productId } });
};

const findMany = () => {
  return prisma.order.findMany({});
};

const findManyByCode = (code: number) => {
  return prisma.order.findMany({ where: { code } });
};

export const orderRepositoy = {
  createAdditional,
  findManyByCode,
  findFirst,
  findMany,
  create,
};
