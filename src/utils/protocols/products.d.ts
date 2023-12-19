import { Product } from '@prisma/client';

export type ProductParams = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type ProductQuery = {
  category?: string;
};
