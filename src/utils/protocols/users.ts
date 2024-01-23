import { User } from "@prisma/client";

export type UserParams = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
