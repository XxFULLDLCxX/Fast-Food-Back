import { paymentRepositoy } from '@/repositories/payments-repository';
import { PaymentParams } from '@/utils/protocols/payments';

const read = async () => {
  return paymentRepositoy.findMany();
};

const create = async (params: PaymentParams) => {
  return paymentRepositoy.create(params);
};

const upsert = async (params: PaymentParams) => {
  return paymentRepositoy.upsert(params);
};

const paymentService = {
  read,
  create,
  upsert
};

export default paymentService;
