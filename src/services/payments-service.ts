import { paymentRepositoy } from '@/repositories/payments-repository';
import setError from '@/utils/errors';
import { PaymentParams } from '@/utils/protocols/payments';
import paymentSchema from '@/utils/schemas';
import httpStatus from 'http-status';

const read = async () => {
  return paymentRepositoy.findMany();
};

const create = async (params: PaymentParams) => {
  return paymentRepositoy.create(params);
};

const upsert = async (params: PaymentParams) => {
  console.log('meu test');
  if (params.code !== 0 && !params?.code) throw setError(httpStatus.NOT_FOUND);
  if (params.code === 0) {
    return paymentRepositoy.create({});
  }
  if (Object.keys(params).length !== 1) {
    const validation = paymentSchema.required.validate(params, { abortEarly: false });
    if (validation.error) {
      const messages = validation.error.details.reduce((message, detail) => message + detail.message + '\n ', '');
      console.log(validation.error);
      throw setError(httpStatus.UNPROCESSABLE_ENTITY, messages);
    } else {
      return paymentRepositoy.upsert(params);
    }
  }
};

const paymentService = {
  read,
  create,
  upsert,
};

export default paymentService;
