-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoricalProductPrice" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "HistoricalProductPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Products_category_idx" ON "Products"("category");

-- AddForeignKey
ALTER TABLE "HistoricalProductPrice" ADD CONSTRAINT "HistoricalProductPrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
