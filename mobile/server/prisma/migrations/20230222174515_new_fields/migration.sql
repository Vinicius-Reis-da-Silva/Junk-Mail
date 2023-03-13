/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `addressCity` on the `discard_points` table. All the data in the column will be lost.
  - You are about to drop the column `addressStreet` on the `discard_points` table. All the data in the column will be lost.
  - You are about to drop the column `discardObject` on the `discard_points` table. All the data in the column will be lost.
  - Added the required column `address_city` to the `discard_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_street` to the `discard_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coord_latitude` to the `discard_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coord_longitude` to the `discard_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discard_object` to the `discard_points` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Address";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_discard_points" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "discard_object" TEXT NOT NULL,
    "address_street" TEXT NOT NULL,
    "address_city" TEXT NOT NULL,
    "coord_latitude" REAL NOT NULL,
    "coord_longitude" REAL NOT NULL,
    "userId" TEXT,
    CONSTRAINT "discard_points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_discard_points" ("createdAt", "id", "userId") SELECT "createdAt", "id", "userId" FROM "discard_points";
DROP TABLE "discard_points";
ALTER TABLE "new_discard_points" RENAME TO "discard_points";
CREATE UNIQUE INDEX "discard_points_coord_latitude_coord_longitude_key" ON "discard_points"("coord_latitude", "coord_longitude");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
