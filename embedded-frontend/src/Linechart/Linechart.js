import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default function SimpleLineChart(props) {
  const received_month_amounts = props.myProp;

  const modifiedData = received_month_amounts.map(item => ({
    ...item,
    // lastMonthAmount: parseInt(item.lastMonthAmount / 10),
    teamWithMonth: `${item.teamId}팀`,
  }));
  
  return (
    <LineChart width={600} height={300} data={modifiedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="teamWithMonth" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="thisMonthAmount" stroke="#8884d8" fill="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="lastMonthAmount" stroke="#82ca9d" fill="#82ca9d" />
    </LineChart>

  );
}

