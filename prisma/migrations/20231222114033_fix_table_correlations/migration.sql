/*
  Warnings:

  - You are about to drop the column `inOrder` on the `additionals` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `orders` table. All the data in the column will be lost.
  - Added the required column `paymentId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userId_fkey";

-- AlterTable
ALTER TABLE "additionals" DROP COLUMN "inOrder";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "userId",
ADD COLUMN     "paymentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "change" INTEGER,
ADD COLUMN     "userId" INTEGER;

-- CreateTable
CREATE TABLE "orderAdditionals" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "additionalId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "orderAdditionals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderAdditionals" ADD CONSTRAINT "orderAdditionals_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderAdditionals" ADD CONSTRAINT "orderAdditionals_additionalId_fkey" FOREIGN KEY ("additionalId") REFERENCES "additionals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
