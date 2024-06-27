import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './index.css'

const Chart = ({ data }) => (
    <div className='line-chart'>
    <LineChart  height={300} width={600} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="timestamp" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
  </LineChart>

    </div>
  
);

export default Chart;