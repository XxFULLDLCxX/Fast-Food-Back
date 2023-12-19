import categoriesRepository from '@/repositories/categories-repository';
import setError from '@/utils/errors';
import httpStatus from 'http-status';

const read = async () => {
  const categories = await categoriesRepository.findMany();
  if (categories.length === 0) throw setError(httpStatus.NOT_FOUND)
  return categories;
};

const categoryService = {
  read
}

export default categoryService;
