import productsRepository from '@/repositories/products-repository';
import setError from '@/utils/errors';
import httpStatus from 'http-status';
import { ProductQuery } from '@/utils/protocols/products';

const read = async (query: ProductQuery) => {
  const search = query?.search;
  const products = search
    ? await productsRepository.findManyBySearch(
        isNaN(Number(search)) ? { name: { contains: search, mode: 'insensitive' } } : { id: Number(search) }
      )
    : await productsRepository.findMany();
  if (products.length === 0) throw setError(httpStatus.NOT_FOUND);
  return products;
};

const productService = {
  read,
};

export default productService;
