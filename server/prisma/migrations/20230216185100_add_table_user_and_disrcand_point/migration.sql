/*
  Warnings:

  - You are about to drop the `DiscardPoint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DiscardPoint";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "discardPoints" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "owner" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL,
    "discardObject" TEXT NOT NULL,
    "latitude" DECIMAL NOT NULL,
    "longitude" DECIMAL NOT NULL,
    "userId" TEXT,
    CONSTRAINT "discardPoints_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isCompany" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
