import { prisma } from "@/config";
import { PaymentParams } from "@/utils/protocols/payments";

const upsert = (params: Partial<PaymentParams>) => {
  return prisma.payment.upsert({
    where: { code: params.code },
    create: params,
    update: params,
  });
};

const create = (params: Partial<PaymentParams>) => {
  return prisma.payment.create({ data: params });
};

const findMany = () => {
  return prisma.payment.findMany({});
};

export const paymentRepositoy = {
  create,
  upsert,
  findMany,
};
