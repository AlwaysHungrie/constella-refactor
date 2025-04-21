import jwt from 'jsonwebtoken'
import { config } from '../config'
import { User } from '../generated/prisma'
import { NextFunction, Request, Response } from 'express'

const { jwtSecret } = config

// generate a jwt token for a user
export const generateJwtToken = (user: User) => {
  return jwt.sign({ userId: user.userId }, jwtSecret, { expiresIn: '30d' })
}

// authenticatedRequest
export interface AuthenticatedRequest extends Request {
  userId: string
}

// verify jwt middleware
export const verifyJwtToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    res.status(401).json({ message: 'Missing authorization token' })
    return
  }

  try {
    const decoded = jwt.verify(token, jwtSecret)
    if (!decoded || typeof decoded !== 'object' || !decoded.userId) {
      res.status(401).json({ message: 'Invalid authorization token' })
      return
    }
    ;(req as AuthenticatedRequest).userId = decoded.userId as string
    next()
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }
}
