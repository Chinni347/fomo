// pages/test.tsx
import StockTable from '../components/StockTable';

const TestPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Test Page</h1>
      <StockTable />
    </div>
  );
};

export default TestPage;
