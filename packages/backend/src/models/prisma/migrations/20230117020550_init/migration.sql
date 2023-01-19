/*
  Warnings:

  - Added the required column `estimatedProductTotalPrice` to the `OrderItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producTotalPrice` to the `OrderItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimantedOrderPrice` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderTotalPrice` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderItems" ADD COLUMN     "estimatedProductTotalPrice" INTEGER NOT NULL,
ADD COLUMN     "producTotalPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "estimantedOrderPrice" INTEGER NOT NULL,
ADD COLUMN     "orderTotalPrice" INTEGER NOT NULL;
