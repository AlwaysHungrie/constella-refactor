import express from 'express'
import cors from 'cors'
import { config } from './config'
import router from './routes'
import { globalErrorHandler } from './middleware/global'

const app = express()
const { port } = config

app.use(cors())
app.use(express.json())

app.get('/health', (_, res) => {
  res.sendStatus(200)
})

app.use('/api', router)
app.use(globalErrorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
