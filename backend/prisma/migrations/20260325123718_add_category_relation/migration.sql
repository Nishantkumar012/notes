/*
  Warnings:

  - You are about to drop the column `category` on the `Note` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CategoryEnum" AS ENUM ('WORK', 'PERSONAL', 'Ideas');

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "categoryenum" "CategoryEnum" NOT NULL DEFAULT 'PERSONAL';

-- DropEnum
DROP TYPE "Category";

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
