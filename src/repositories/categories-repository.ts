import { prisma } from '@/config';
import { CategoryParams } from '@/utils/protocols/categories';

const findMany = () => {
  return prisma.category.findMany({});
};

const create = (params: CategoryParams) => {
  return prisma.category.create({ data: params });
};

const categoriesRepository = { findMany, create };

export default categoriesRepository;
