import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';

const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

export default function SimpleBarChart(props) {
    const received_month_amounts = props.myProp;

    const modifiedData = received_month_amounts.map(item => ({
        ...item,
        // lastMonthAmount: parseInt(item.lastMonthAmount / 10),
        teamWithMonth: `${item.teamId}팀`,
      }));
      
      const formatYAxis = (value) => {
        // Divide the value by 10,000 and round to 2 decimal places
        const formattedValue = parseInt(value / 10000);
        return `${formattedValue}만`;
      };
      
      return (
        <BarChart width={730} height={250} data={modifiedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="teamWithMonth" />
          <YAxis tickFormatter={formatYAxis} />
            <Tooltip />
            <Legend />
            <Bar dataKey="lastMonthAmount" fill="#8884d8" />
            <Bar dataKey="thisMonthAmount" fill="#82ca9d" />
        </BarChart>
    );

}
