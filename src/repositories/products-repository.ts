import { prisma } from '@/config';
import { ProductParams } from '@/utils/protocols/products';

const findMany = () => {
  return prisma.product.findMany({});
};

const findManyBySearch = (where: { id?: number; name?: { contains: string; mode?: 'insensitive' } }) => {
  return prisma.product.findMany({ where });
};

const findFirstByIdIncludeAdditionals = (id: number) => {
  return prisma.product.findFirst({ where: { id }, include: { additionals: true } });
};

const create = (params: ProductParams) => {
  return prisma.category.create({ data: params });
};

const productsRepository = {
  findMany,
  findManyBySearch,
  findFirstByIdIncludeAdditionals,
  create,
};

export default productsRepository;
