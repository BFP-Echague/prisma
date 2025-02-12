/*
  Warnings:

  - Added the required column `name` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Incident" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "reportTime" DROP NOT NULL;
