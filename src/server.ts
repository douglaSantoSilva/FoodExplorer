import 'express-async-errors'
import express from "express";
import { routes } from './routes/index'
import { errorMiddleware } from './middlewares/api.errors'

const app = express()
app.use(express.json())


app.use(routes)
app.use(errorMiddleware)

const PORT = 3333
app.listen(PORT, () => console.log("Server is running"))