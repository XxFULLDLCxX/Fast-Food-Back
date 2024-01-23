import { prisma } from "@/config";

async function findFirst() {
  const result = await prisma.payment.findFirst({});
  return result;
}

async function findMany() {
  const result = await prisma.payment.findMany({});
  return result;
}

const paymentFactory = {
  findFirst,
  findMany,
};

export default paymentFactory;
