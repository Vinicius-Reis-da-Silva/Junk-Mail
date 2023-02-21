/*
  Warnings:

  - You are about to drop the column `latitude` on the `discard_points` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `discard_points` table. All the data in the column will be lost.
  - Added the required column `address` to the `discard_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `discard_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localization_lat` to the `discard_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localization_long` to the `discard_points` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Localization" (
    "latitude" DECIMAL NOT NULL,
    "longitude" DECIMAL NOT NULL,

    PRIMARY KEY ("latitude", "longitude")
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_discard_points" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL,
    "discardObject" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "localization_lat" DECIMAL NOT NULL,
    "localization_long" DECIMAL NOT NULL,
    "userId" TEXT,
    CONSTRAINT "discard_points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "discard_points_localization_lat_localization_long_fkey" FOREIGN KEY ("localization_lat", "localization_long") REFERENCES "Localization" ("latitude", "longitude") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_discard_points" ("createdAt", "discardObject", "id", "userId") SELECT "createdAt", "discardObject", "id", "userId" FROM "discard_points";
DROP TABLE "discard_points";
ALTER TABLE "new_discard_points" RENAME TO "discard_points";
CREATE UNIQUE INDEX "discard_points_localization_lat_localization_long_key" ON "discard_points"("localization_lat", "localization_long");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
