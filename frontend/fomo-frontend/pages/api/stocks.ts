// pages/api/stocks.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const stocks = [
  { name: 'GOOG', price: '1500' },
  { name: 'BTC', price: '30000' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(stocks);
}
