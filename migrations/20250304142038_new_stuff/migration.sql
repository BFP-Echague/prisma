/*
  Warnings:

  - You are about to drop the `Cause` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CauseIncidentJunc` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CauseIncidentJunc" DROP CONSTRAINT "CauseIncidentJunc_causeId_fkey";

-- DropForeignKey
ALTER TABLE "CauseIncidentJunc" DROP CONSTRAINT "CauseIncidentJunc_incidentId_fkey";

-- AlterTable
ALTER TABLE "Incident" ADD COLUMN     "causes" TEXT[];

-- DropTable
DROP TABLE "Cause";

-- DropTable
DROP TABLE "CauseIncidentJunc";
