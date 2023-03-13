-- CreateTable
CREATE TABLE "Address" (
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    PRIMARY KEY ("street", "city")
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_discard_points" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "discardObject" TEXT NOT NULL,
    "userId" TEXT,
    "addressStreet" TEXT,
    "addressCity" TEXT,
    CONSTRAINT "discard_points_addressStreet_addressCity_fkey" FOREIGN KEY ("addressStreet", "addressCity") REFERENCES "Address" ("street", "city") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "discard_points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_discard_points" ("createdAt", "discardObject", "id", "userId") SELECT "createdAt", "discardObject", "id", "userId" FROM "discard_points";
DROP TABLE "discard_points";
ALTER TABLE "new_discard_points" RENAME TO "discard_points";
CREATE UNIQUE INDEX "discard_points_addressStreet_addressCity_key" ON "discard_points"("addressStreet", "addressCity");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
