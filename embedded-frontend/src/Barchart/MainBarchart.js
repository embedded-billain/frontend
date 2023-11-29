import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';

const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

export default function SimpleBarChart(props) {
    const received_month_amounts = props.myProp;
    return (
      <BarChart width={730} height={250} data={received_month_amounts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="teamId" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="lastWeekAmount" fill="#8884d8" />
            <Bar dataKey="thisWeekAmount" fill="#82ca9d" />
        </BarChart>
    );

}
