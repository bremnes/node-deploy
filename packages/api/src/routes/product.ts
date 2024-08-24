import express from 'express';
import { Request, Response } from 'express';
import { productMock, Product, ProductDef } from '@my-project/shared';
import { Locale} from '@my-project/shared';

const router = express.Router();

let fakeDB: Product[] = [
  productMock(),
  productMock(),
  productMock(),
  productMock(),
  productMock(),
  productMock(),
  productMock(),
  productMock(),
];

router.get('/', (req: Request, res: Response) => {
  const locale : Locale = 'en';
  console.log('locale is', locale);
  res.json(fakeDB);
});

router.post('/', (req: Request, res: Response) => {
  const inputProductValidation = ProductDef.safeParse(req.body);
  if (!inputProductValidation.success) {
    res.status(400).json(inputProductValidation.error);
    return;
  }
  fakeDB.push(inputProductValidation.data);
  res.status(200).json(inputProductValidation.data);
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
