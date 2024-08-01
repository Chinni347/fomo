import express from 'express';
import Stock from '../models/Stock';

const router = express.Router();

// Route to get the latest 20 entries for a symbol
router.get('/stocks/:symbol', async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const stocks = await Stock.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(stocks);
  } catch (error) {
    if (error instanceof Error) {
      // TypeScript now knows that `error` is an instance of Error
      res.status(500).json({ error: error.message });
    } else {
      // Handle unexpected error types
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

export default router;
