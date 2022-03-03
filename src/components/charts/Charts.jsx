import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './charts.css'

export default function Charts() {
    const data = [
        {
          name: 'فروردین',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'اردیبهشت',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'خرداد',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'تیر',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'مرداد',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'شهریور',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'مهر',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'آبان',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'آذر',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'دی',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'بهمن',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'اسفند',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
      ];
  return (
    <div className='charts'>
         <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
