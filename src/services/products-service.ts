import productsRepository from '@/repositories/products-repository';
import setError from '@/utils/errors';
import httpStatus from 'http-status';
import { ProductQuery } from '@/utils/protocols/products';

const read = async (query: ProductQuery) => {
  const products =
    'category' in query
      ? isNaN(Number(query.category))
        ? await productsRepository.findManyByCategoryName(query.category)
        : await productsRepository.findManyByCategoryId(Number(query.category))
      : await productsRepository.findMany();

  if (products.length === 0) throw setError(httpStatus.NOT_FOUND);
  return products;
};

const productService = {
  read,
};

export default productService;
