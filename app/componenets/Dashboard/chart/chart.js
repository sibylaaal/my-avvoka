'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', value: 200 },
  { name: 'Feb', value: 100 },
  { name: 'Mar', value: 40 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 400 },  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 800 },
  // ...
]
export default function MyChart() {
  return (
    <LineChart width={800} height={500} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}


