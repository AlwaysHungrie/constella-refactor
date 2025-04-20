-- CreateTable
CREATE TABLE "User" (
    "userAddress" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "privyUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userAddress")
);

-- CreateTable
CREATE TABLE "AgentWallet" (
    "walletAddress" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "ownerAddress" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "systemPrompt" TEXT NOT NULL,
    "dbName" TEXT NOT NULL,
    "dbUser" TEXT NOT NULL,
    "dbPassword" TEXT NOT NULL,
    "dbHost" TEXT NOT NULL,
    "dbPort" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AgentWallet_pkey" PRIMARY KEY ("walletAddress")
);

-- CreateTable
CREATE TABLE "AgentFunction" (
    "functionId" TEXT NOT NULL,
    "functionName" TEXT NOT NULL,
    "agentWalletAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AgentFunction_pkey" PRIMARY KEY ("functionId")
);

-- CreateTable
CREATE TABLE "Attestations" (
    "attestationHash" TEXT NOT NULL,
    "isSystemPromptValid" BOOLEAN NOT NULL,
    "result" TEXT NOT NULL,
    "functionCalls" TEXT[],
    "jsonResponses" TEXT[],
    "transactionHashes" TEXT[],

    CONSTRAINT "Attestations_pkey" PRIMARY KEY ("attestationHash")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userAddress_key" ON "User"("userAddress");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_privyUserId_key" ON "User"("privyUserId");

-- CreateIndex
CREATE UNIQUE INDEX "AgentWallet_walletAddress_key" ON "AgentWallet"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "AgentFunction_functionName_key" ON "AgentFunction"("functionName");

-- AddForeignKey
ALTER TABLE "AgentWallet" ADD CONSTRAINT "AgentWallet_ownerAddress_fkey" FOREIGN KEY ("ownerAddress") REFERENCES "User"("userAddress") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentFunction" ADD CONSTRAINT "AgentFunction_agentWalletAddress_fkey" FOREIGN KEY ("agentWalletAddress") REFERENCES "AgentWallet"("walletAddress") ON DELETE RESTRICT ON UPDATE CASCADE;
