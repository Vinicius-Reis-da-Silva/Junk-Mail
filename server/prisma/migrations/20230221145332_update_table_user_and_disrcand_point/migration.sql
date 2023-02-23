/*
  Warnings:

  - You are about to drop the `Localization` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `address` on the `discard_points` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `discard_points` table. All the data in the column will be lost.
  - You are about to drop the column `localization_lat` on the `discard_points` table. All the data in the column will be lost.
  - You are about to drop the column `localization_long` on the `discard_points` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Localization";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_discard_points" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "discardObject" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "discard_points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_discard_points" ("createdAt", "discardObject", "id", "userId") SELECT "createdAt", "discardObject", "id", "userId" FROM "discard_points";
DROP TABLE "discard_points";
ALTER TABLE "new_discard_points" RENAME TO "discard_points";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
