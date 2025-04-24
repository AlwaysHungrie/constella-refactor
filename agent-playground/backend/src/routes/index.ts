import { Router } from 'express'
import authRouter from './auth'
import messageRouter from './messageRouter'

const router = Router()

router.use('/auth', authRouter)
router.use('/message', messageRouter)

export default router