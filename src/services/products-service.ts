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
  if (!search) {
    for (let i = products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [products[i], products[j]] = [products[j], products[i]];
    }
    return products.slice(0, 12);
  }

  return products.slice(0, 36);
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
