import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';

const data = [
    {
      "name": "팀 A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "팀 B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "팀 C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "팀 D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "팀 E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "팀 F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "팀 G",
      "uv": 3490,
      "pv": 4300
    }
  ]

const SimpleBarChart = () => {
    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    );

}

export default SimpleBarChart;