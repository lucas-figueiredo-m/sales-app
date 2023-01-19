/*
  Warnings:

  - You are about to drop the column `estimantedOrderPrice` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `estimatedOrderPrice` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "estimantedOrderPrice",
ADD COLUMN     "estimatedOrderPrice" INTEGER NOT NULL;
