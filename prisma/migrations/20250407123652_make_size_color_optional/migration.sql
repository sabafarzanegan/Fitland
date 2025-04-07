-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_colorId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_sizeId_fkey";

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "sizeId" DROP NOT NULL,
ALTER COLUMN "colorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE SET NULL ON UPDATE CASCADE;
