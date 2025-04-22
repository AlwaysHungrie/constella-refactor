import { Router } from 'express'
import { asyncHandler, validateRequest } from '../middleware/global'
import {
  createAgentWalletSchema,
  handleCreateAgentWallet,
  handleDeleteAgentWallet,
  handleGetAgentWallet,
  handleGetAgentWallets,
} from '../handlers/walletHandlers'
import { verifyJwtToken } from '../middleware/jwt'

const walletRouter = Router()

walletRouter.get(
  '/',
  verifyJwtToken,
  asyncHandler(handleGetAgentWallets),
)

walletRouter.get(
  '/:walletAddress',
  asyncHandler(handleGetAgentWallet),
)

walletRouter.post(
  '/',
  verifyJwtToken,
  validateRequest(createAgentWalletSchema),
  asyncHandler(handleCreateAgentWallet)
)

walletRouter.delete(
  '/:walletAddress',
  verifyJwtToken,
  asyncHandler(handleDeleteAgentWallet),
)

export default walletRouter
