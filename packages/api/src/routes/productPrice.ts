import express from 'express';
import { Request, Response } from 'express';
import { productPriceMock, ProductPrice, ProductPriceDef } from '@my-project/shared';
import { Locale} from '@my-project/shared';

const router = express.Router();

let fakeDB: ProductPrice[] = [
  productPriceMock(),
  productPriceMock(),
  productPriceMock(),
  productPriceMock(),
  productPriceMock(),
  productPriceMock(),
  productPriceMock(),
  productPriceMock(),
];

router.get('/', (req: Request, res: Response) => {
  const locale : Locale = 'en';
  console.log('locale is', locale);
  res.json(fakeDB);
});

router.post('/', (req: Request, res: Response) => {

  const inputProductPriceValidation = ProductPriceDef.safeParse(req.body);
  if (!inputProductPriceValidation.success) {
    res.status(400).json(inputProductPriceValidation.error);
    return;
  }
  fakeDB.push(inputProductPriceValidation.data);
  res.status(200).json(inputProductPriceValidation.data);
});

router.put('/:id', (req: Request, res: Response) => {
  fakeDB = fakeDB.map(entity => entity.id === req.params.id ? req.body : entity);
  res.status(200).send();
});

router.delete('/:id', (req: Request, res: Response) => {
  fakeDB = fakeDB.filter(entity => entity.id !== req.params.id);
  res.status(200).send();
});

export default router;
