import { faker } from '@faker-js/faker';
import { prisma } from '@/config';
import { ProductParams } from '@/utils/protocols/products';
import { buildCategory } from './categories.factory';

export function generateProduct(categoryId: number) {
  const result: ProductParams = {
    name: faker.commerce.product(),
    image: 'https://fakeimg.pl/200x200/?text=Product&font=lobster',
    banner: 'https://fakeimg.pl/200x200/?text=ProductBanner&font=lobster',
    price: Number(faker.commerce.price()),
    teaser: faker.lorem.lines(1),
    details: faker.lorem.lines(3),
    categoryId,
  };
  return result;
}

export async function buildProduct(params?: ProductParams) {
  const category = await buildCategory();
  const result = prisma.product.create({ data: params || generateProduct(category.id) });
  return result;
}
