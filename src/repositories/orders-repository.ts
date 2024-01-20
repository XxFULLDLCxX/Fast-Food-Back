import { prisma } from '@/config';
import { OrderAdditionalsParams, OrderParams } from '@/utils/protocols/orders';
import { paymentRepositoy } from './payments-repository';

const create = async (params: OrderParams) => {
  const { code } = params;
  const payment = await paymentRepositoy.upsert({ code });
  return prisma.order.create({ data: { ...params, paymentId: payment.id } });
};

const createAdditional = async (params: OrderAdditionalsParams) => {
  return prisma.orderAdditional.create({ data: params });
}

const findMany = () => {
  return prisma.order.findMany({});
};

export const orderRepositoy = {
  createAdditional,
  findMany,
  create,
};
