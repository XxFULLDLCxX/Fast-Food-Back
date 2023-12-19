import { prisma } from '@/config';
import { ProductParams } from '@/utils/protocols/products';

const findMany = () => {
  return prisma.product.findMany({});
};

const findManyByCategoryId = (categoryId: number) => {
  return prisma.product.findMany({ where: { categoryId } });
};

const findManyByCategoryName = (name: string) => {
  return prisma.product.findMany({ where: { categories: { name } }, include: { categories: true } });
};

const create = (params: ProductParams) => {
  return prisma.category.create({ data: params });
};

const productsRepository = { findMany, findManyByCategoryId, findManyByCategoryName, create };

export default productsRepository;
