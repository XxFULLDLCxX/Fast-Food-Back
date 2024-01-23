import { faker } from "@faker-js/faker";
import { prisma } from "@/config";
import { UserParams } from "@/utils/protocols/users";

async function findFirst() {
  const result = await prisma.user.findFirst({});
  return result;
}

async function generateUser() {
  return { name: faker.person.fullName() };
}

async function buildUser(params?: UserParams) {
  const result = await prisma.user.create({ data: params || generateUser() });
  return result;
}

const userFactory = {
  generateUser,
  findFirst,
  buildUser,
};

export default userFactory;
