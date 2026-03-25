/*
  Warnings:

  - You are about to drop the column `categoryenum` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Note" DROP COLUMN "categoryenum";

-- DropEnum
DROP TYPE "CategoryEnum";
