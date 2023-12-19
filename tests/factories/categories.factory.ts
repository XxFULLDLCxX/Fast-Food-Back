import { faker } from '@faker-js/faker';
import { prisma } from '@/config';
import { CategoryParams } from '@/utils/protocols/categories';

export function generateCategory() {
  const category: CategoryParams = {
    image: 'https://fakeimg.pl/200x200/?text=Category&font=lobster',
    name: faker.commerce.product()
  };
  return category;
}

export function buildCategory(params?: CategoryParams) {
  const result = prisma.category.create({ data: params || generateCategory() });
  return result;
}
