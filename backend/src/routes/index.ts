import { Router } from 'express'
import authRouter from './auth'
import walletRouter from './wallet'
import verifyRouter from './verify'

const router = Router()

router.use('/auth', authRouter)
router.use('/wallet', walletRouter)
router.use('/verify', verifyRouter)

export default router