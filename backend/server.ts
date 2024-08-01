import express from 'express';
import mongoose from 'mongoose';
import stockRoutes from './routes/stockRoutes';

const app = express();
const port = 5000;

// Configure Mongoose
mongoose.set('strictQuery', false); // Optional: Handle deprecation warning
mongoose.connect('mongodb://localhost:27017/fomo')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api', stockRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
