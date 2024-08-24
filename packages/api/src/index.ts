import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoute from './routes/product';
import productPriceRoute from './routes/productPrice';

dotenv.config({
  path: process.env.NODE_ENV
    ? ['.env.local', `.env.${process.env.NODE_ENV}`]
    : ['.env.local']
});

const app = express();
const port = process.env.PORT ?? 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World, reading from config! ' + process.env.TEST_CONFIG)
})

app.use('/v1/product', productRoute);
app.use('/v1/product-price', productPriceRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})