# Fomo

## Description
A web application to display stock and crypto prices using Next.js and Tailwind CSS.

## Prerequisites
- Node.js (v14 or higher)
- npm (or yarn)

## Setup

1. **Clone the Repository**
 
   git clone https://github.com/Chinni347/fomo.git
   cd fomo

2. **Install Backend Dependencies**
   cd backend
   npm install

3. **Install Frontend Dependencies**
   cd ../frontend/fomo-frontend
   npm install

4. **Set Up MongoDB**
  Make sure MongoDB is running locally. You can start MongoDB by running:
  mongod

5. **Run the Backend**
  cd ../backend
  npm start

6. **Run the Frontend**
   cd ../frontend/fomo-frontend
   npm run dev

7. **Access the Application**
   Frontend: http://localhost:3000/test
   Backend API should be accessible at http://localhost:5000/api

**Usage**
The frontend application displays real-time stock and crypto prices.
You can modify the StockTable.tsx component to change the stocks/cryptos being displayed or to adjust the polling frequency.

