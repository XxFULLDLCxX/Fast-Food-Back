import { prisma } from '@/config';

export async function findFirst() {
  const result = await prisma.user.findFirst({});
  return result;
}
