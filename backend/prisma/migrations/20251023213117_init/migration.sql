-- CreateTable
CREATE TABLE "FavoriteList" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoriteList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "posterPath" TEXT,
    "rating" DOUBLE PRECISION,
    "listId" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteList_sessionId_key" ON "FavoriteList"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteList_uuid_key" ON "FavoriteList"("uuid");

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_listId_fkey" FOREIGN KEY ("listId") REFERENCES "FavoriteList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
