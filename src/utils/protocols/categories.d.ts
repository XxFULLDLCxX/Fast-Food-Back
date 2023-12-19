import { Category } from '@prisma/client';

export type CategoryParams = Omit<Category, 'id' | 'createdAt' | 'updatedAt'>;
