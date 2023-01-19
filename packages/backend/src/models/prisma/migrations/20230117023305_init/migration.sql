-- AlterTable
ALTER TABLE "OrderItems" ALTER COLUMN "deliveredWeightInGrams" DROP NOT NULL,
ALTER COLUMN "productTotalPrice" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "orderTotalPrice" DROP NOT NULL;
