import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/products/products.route';
const app: Application = express()


app.use(express.json())
app.use(cors())

// Application routes

app.use('/api/products', ProductRoutes)


app.get('/', (req:Request, res:Response ) => {
  res.send('Hello World!')
})

export default app

