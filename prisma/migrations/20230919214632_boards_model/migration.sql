-- CreateTable
CREATE TABLE "boards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "reporter" TEXT NOT NULL,
    "assignee" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'TODO',
    "points" INTEGER,
    "issue" INTEGER,
    "label" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "boards_reporter_fkey" FOREIGN KEY ("reporter") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "boards_assignee_fkey" FOREIGN KEY ("assignee") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
