/*
  Warnings:

  - Added the required column `overview` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseDate` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Favorite" ADD COLUMN     "overview" TEXT NOT NULL,
ADD COLUMN     "releaseDate" TEXT NOT NULL;
