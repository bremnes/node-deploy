import axios from 'axios';
import { Product } from '@my-project/shared';

const API_URL = 'http://localhost:3001/v1/product';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};