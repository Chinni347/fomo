// components/StockTable.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { setStocks } from '../store/stockSlice';

const stocksToFetch = ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'cardano'];

const StockTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const stocks = useSelector((state: RootState) => state.stocks.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const responses = await Promise.all(
          stocksToFetch.map((stock) =>
            axios.get(
              `https://api.coingecko.com/api/v3/coins/markets`,
              {
                params: {
                  vs_currency: 'usd',
                  ids: stock,
                },
              }
            )
          )
        );

        const data = responses.map((response) => ({
          name: response.data[0].name,
          price: response.data[0].current_price,
        }));

        dispatch(setStocks(data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setLoading(false);
      }
    };

    fetchStocks();
    const intervalId = setInterval(fetchStocks, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId);
  }, [dispatch]);

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-semibold uppercase">Stock</th>
            <th className="py-3 px-6 text-left text-sm font-semibold uppercase">Price (USD)</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {stocks.map((stock, index) => (
            <tr key={index} className="bg-gray-100 hover:bg-gray-200 transition duration-150">
              <td className="py-3 px-6">{stock.name}</td>
              <td className="py-3 px-6">${stock.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
