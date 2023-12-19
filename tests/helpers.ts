import { prisma } from '@/config';

export default async function cleanDb() {
  await prisma.category.deleteMany({});
}
