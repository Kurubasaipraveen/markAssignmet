import React, { useState, useEffect } from 'react';
import { fetchStockData } from '../services/dataService';
import Header from './Header';
import Chart from './Charts';
import DataTable from './DataTable';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchStockData('AAPL');
        const timeSeries = result['Time Series (Daily)'];
        const formattedData = Object.keys(timeSeries).map((key) => ({
          date: key,
          open: parseFloat(timeSeries[key]['1. open']),
          high: parseFloat(timeSeries[key]['2. high']),
          low: parseFloat(timeSeries[key]['3. low']),
          close: parseFloat(timeSeries[key]['4. close']),
        }));
        setData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      {loading ? <p>Loading...</p> : <Chart data={data.slice(0, 30)} />}
      <h1>Stock Market Table</h1>
      {loading ? null : <DataTable data={data.slice(0, 30)} />}
    </div>
  );
};

export default Dashboard;
