-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_discard_points" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "discardObject" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "localization_lat" DECIMAL NOT NULL,
    "localization_long" DECIMAL NOT NULL,
    "userId" TEXT,
    CONSTRAINT "discard_points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "discard_points_localization_lat_localization_long_fkey" FOREIGN KEY ("localization_lat", "localization_long") REFERENCES "Localization" ("latitude", "longitude") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_discard_points" ("address", "city", "createdAt", "discardObject", "id", "localization_lat", "localization_long", "userId") SELECT "address", "city", "createdAt", "discardObject", "id", "localization_lat", "localization_long", "userId" FROM "discard_points";
DROP TABLE "discard_points";
ALTER TABLE "new_discard_points" RENAME TO "discard_points";
CREATE UNIQUE INDEX "discard_points_localization_lat_localization_long_key" ON "discard_points"("localization_lat", "localization_long");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
