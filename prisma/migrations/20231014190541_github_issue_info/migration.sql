/*
  Warnings:

  - You are about to drop the column `issue` on the `boards` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_boards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "reporter" TEXT NOT NULL,
    "assignee" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'TODO',
    "priority" INTEGER NOT NULL DEFAULT 0,
    "points" INTEGER,
    "label" TEXT,
    "issue_id" TEXT,
    "issue_url" TEXT,
    "project_id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "boards_reporter_fkey" FOREIGN KEY ("reporter") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "boards_assignee_fkey" FOREIGN KEY ("assignee") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "boards_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_boards" ("assignee", "createdAt", "description", "id", "label", "points", "priority", "project_id", "reporter", "status", "title", "updatedAt") SELECT "assignee", "createdAt", "description", "id", "label", "points", "priority", "project_id", "reporter", "status", "title", "updatedAt" FROM "boards";
DROP TABLE "boards";
ALTER TABLE "new_boards" RENAME TO "boards";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
