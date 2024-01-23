import { prisma } from "@/config";
import { CategoryParams } from "@/utils/protocols/categories";

const findMany = () => {
  return prisma.category.findMany({});
};

const findFirstIncludeProducts = (id: number) => {
  return prisma.category.findFirst({
    where: { id },
    include: { products: true },
  });
};

const create = (params: CategoryParams) => {
  return prisma.category.create({ data: params });
};

const categoriesRepository = { findFirstIncludeProducts, findMany, create };

export default categoriesRepository;
