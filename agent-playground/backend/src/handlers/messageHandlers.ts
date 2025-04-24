import { Request, Response } from 'express'
import Joi from 'joi'
import { AuthenticatedRequest } from '../middleware/jwt'
import { executeOpenaiRequest } from '../services/openai'

export const messageSchema = Joi.object({
  message: Joi.string().required(),
  apiKey: Joi.string().required(),
})

export const handleMessage = async (_req: Request, res: Response) => {
  const req = _req as AuthenticatedRequest
  const { userId } = req
  const { message, apiKey } = req.body

  const messageId = crypto.randomUUID()

  const result = await executeOpenaiRequest(apiKey, message, userId, messageId)

  res.status(200).json({
    messageId,
    result,
  })
}
