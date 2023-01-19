/*
  Warnings:

  - You are about to alter the column `productTotalPrice` on the `OrderItems` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `orderTotalPrice` on the `Orders` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "OrderItems" ADD COLUMN     "notes" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "productTotalPrice" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "orderTotalPrice" SET DATA TYPE INTEGER;
