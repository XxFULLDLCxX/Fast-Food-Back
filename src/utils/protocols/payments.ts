import { Payment } from '@prisma/client';

export type PaymentParams = Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>;
