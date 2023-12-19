import { Order } from '@prisma/client';

export type OrderParams = Omit<Order, 'id' | 'createdAt' | 'updatedAt'>;
