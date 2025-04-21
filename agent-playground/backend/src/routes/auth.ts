import { Router } from 'express'
import { asyncHandler, validateRequest } from '../middleware/global'
import { connectSchema, handleConnect } from '../handlers/authHandlers'

const authRouter = Router()

authRouter.post(
  '/connect',
  validateRequest(connectSchema),
  asyncHandler(handleConnect)
)

export default authRouter
