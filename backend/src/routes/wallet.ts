import { Router } from 'express'
import { asyncHandler, validateRequest } from '../middleware/global'
import {
  createAgentWalletSchema,
  handleCreateAgentWallet,
  handleDeleteAgentWallet,
  handleGetAgentWallets,
} from '../handlers/walletHandlers'
import { verifyJwtToken } from '../middleware/jwt'

const walletRouter = Router()

walletRouter.get(
  '/',
  verifyJwtToken,
  asyncHandler(handleGetAgentWallets),
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
