import categoriesRepository from '@/repositories/categories-repository';
import setError from '@/utils/errors';
import httpStatus from 'http-status';

const readMany = async () => {
  const categories = await categoriesRepository.findMany();
  if (categories.length === 0) throw setError(httpStatus.NOT_FOUND);
  return categories;
};

const readFirst = async (id: number) => {
  const category = categoriesRepository.findFirstIncludeProducts(id);
  if (Object.keys(category).length === 0) throw setError(httpStatus.NOT_FOUND);
  return category;
};
const categoryService = {
  readMany,
  readFirst,
};

export default categoryService;
