/*
  Warnings:

  - Made the column `owner_name` on table `projects` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "owner_name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "projects_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_projects" ("createdAt", "id", "name", "owner_name", "team_id", "updatedAt", "url", "user_id") SELECT "createdAt", "id", "name", "owner_name", "team_id", "updatedAt", "url", "user_id" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
