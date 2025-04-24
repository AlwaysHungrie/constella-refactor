import { Router } from 'express'
import { asyncHandler, validateRequest } from '../middleware/global'
import { handleMessage } from '../handlers/messageHandlers'
import { messageSchema } from '../handlers/messageHandlers'
import { verifyJwtToken } from '../middleware/jwt'

const messageRouter = Router()

messageRouter.post(
  '/',
  verifyJwtToken,
  validateRequest(messageSchema),
  asyncHandler(handleMessage)
)

export default messageRouter
