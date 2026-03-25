-- CreateEnum
CREATE TYPE "Category" AS ENUM ('WORK', 'PERSONAL', 'Ideas');

-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'PERSONAL';
