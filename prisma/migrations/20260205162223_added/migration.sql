/*
  Warnings:

  - Made the column `age` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isMarried` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nationality` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "age" SET NOT NULL,
ALTER COLUMN "isMarried" SET NOT NULL,
ALTER COLUMN "nationality" SET NOT NULL;
