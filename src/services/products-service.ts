import httpStatus from "http-status";
import productsRepository from "@/repositories/products-repository";
import setError from "@/utils/errors";
import { ProductQuery } from "@/utils/protocols/products";

const read = async (query: ProductQuery) => {
  const search = query?.search;
  const products = search
    ? await productsRepository.findManyBySearch(
        isNaN(Number(search))
          ? { name: { contains: search, mode: "insensitive" } }
          : { id: Number(search) },
      )
    : await productsRepository.findMany();
  if (products.length === 0) throw setError(httpStatus.NOT_FOUND);
  return products;
};

const readAdditionals = async (id: number) => {
  const product = await productsRepository.findFirstByIdIncludeAdditionals(id);
  return product.additionals;
};

const productService = {
  read,
  readAdditionals,
};

export default productService;
