import { prisma } from '@/config';

export default async function cleanDb() {
  await prisma.user.deleteMany({});
  await prisma.additional.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
}
