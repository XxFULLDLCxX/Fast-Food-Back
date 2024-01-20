import { Order, OrderAdditional } from '@prisma/client';

export type OrderParams = Omit<Order, 'id' | 'createdAt' | 'updatedAt'>;
export type OrderAdditionalsParams = Omit<OrderAdditional, 'id' | 'createdAt' | 'updatedAt'>;
