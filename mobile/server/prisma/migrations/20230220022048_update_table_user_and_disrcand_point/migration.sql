/*
  Warnings:

  - You are about to drop the `discardPoints` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "discardPoints";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "discard_points" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "discardObject" TEXT NOT NULL,
    "latitude" DECIMAL NOT NULL,
    "longitude" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "discard_points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "googleId" TEXT,
    "avatarUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isCompany" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_user" ("email", "id", "isCompany", "name") SELECT "email", "id", "isCompany", "name" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_googleId_key" ON "user"("googleId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
