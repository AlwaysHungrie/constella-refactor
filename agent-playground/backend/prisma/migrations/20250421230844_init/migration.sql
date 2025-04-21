-- CreateTable
CREATE TABLE "User" (
    "userAddress" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "privyUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userAddress")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userAddress_key" ON "User"("userAddress");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_privyUserId_key" ON "User"("privyUserId");
