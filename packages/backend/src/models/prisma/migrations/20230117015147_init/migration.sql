/*
  Warnings:

  - You are about to drop the column `grams` on the `OrderItems` table. All the data in the column will be lost.
  - Added the required column `deliveredWeightInGrams` to the `OrderItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderedWeightInGrams` to the `OrderItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderItems" DROP COLUMN "grams",
ADD COLUMN     "deliveredWeightInGrams" INTEGER NOT NULL,
ADD COLUMN     "orderedWeightInGrams" INTEGER NOT NULL;
