import { Router } from 'express'
import { handleVerificationRequest } from '../handlers/verifyHandlers'

const verifyRouter = Router()

verifyRouter.get('/', handleVerificationRequest)

export default verifyRouter
