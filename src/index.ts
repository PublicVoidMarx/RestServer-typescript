import express from 'express'
import './database'
import { router as routerDiaries } from './api/diaries'
import { router as routerUsers } from './api/users'

const app = express()
app.use(express.json())
const PORT = 3000

app.use('/users', routerUsers)
app.use('/diaries', routerDiaries)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} `)
})
