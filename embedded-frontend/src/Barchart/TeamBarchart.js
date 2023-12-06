import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';
import { Cell } from 'recharts';

const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

const colorMap = {
    '11': '#8884d8',
    '10': '#83a6ed',
    '9': '#8dd1e1',
    '8': '#8dd1e1',
    '7': '#8dd1e1',
    // 추가적인 카테고리에 대한 색상을 지정하세요
  };

export default function SimpleBarChart(props) {
    const amountByMonthList = props.myProp;
    const reversedAmountByMonthList = [...amountByMonthList].reverse();

    const modifiedData = reversedAmountByMonthList.map(item => ({
      ...item,
      withMonth: `${item.month}월`,
    }));

    const formatYAxis = (value) => {
      // Divide the value by 10,000 and round to 2 decimal places
      const formattedValue = parseInt(value / 10000);
      return `${formattedValue}만`;
    };

    const colorMap = {
        1: '#8884d8',
        2: '#8884d8',
        3: '#8884d8',
        4: '#8884d8',
        5: '#8884d8',
        6: '#8884d8',
        7: '#8884d8',
        8: '#83a6ed',
        9: '#8dd1e1',
        10: '#82ca9d',
        11: '#a4de6c',
        12: '#8884d8',
        // 추가적인 월에 대한 색상을 지정하세요
      };
    const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];
    
      return (
        <BarChart width={730} height={250} data={modifiedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="withMonth" />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="amount"
            name="Monthly Amount">
             
            {reversedAmountByMonthList.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            // fill={colorMap[reversedAmountByMonthList.month] } 
            
          </Bar>
        </BarChart>
    );

}
