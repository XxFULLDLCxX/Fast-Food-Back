/*
  Warnings:

  - You are about to drop the column `info` on the `products` table. All the data in the column will be lost.
  - Added the required column `details` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teaser` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "info",
ADD COLUMN     "details" TEXT NOT NULL,
ADD COLUMN     "teaser" TEXT NOT NULL;
