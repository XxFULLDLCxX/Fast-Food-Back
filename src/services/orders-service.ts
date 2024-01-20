import { orderRepositoy } from '@/repositories/orders-repository';
import { paymentRepositoy } from '@/repositories/payments-repository';
import { userRepositoy } from '@/repositories/users-repository';
import { OrderAdditionalsParams, OrderParams } from '@/utils/protocols/orders';

const read = async () => {
  return orderRepositoy.findMany();
};

const create = async (params: OrderParams) => {
  const { productId, quantity, note, code } = params;

  return orderRepositoy.create(params);
};

const createAdditional = async (params: OrderAdditionalsParams) => {
  return orderRepositoy.createAdditional(params);
};

const orderService = {
  createAdditional,
  create,
  read,
};

export default orderService;
