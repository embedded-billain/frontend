import React from "react";
import { PieChart, Pie, Cell } from 'recharts';


const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

  

export default function SimplePiChart(props){
    const category_amount = props.myProp;
    return (
        <PieChart width={730} height={250}>
            <Pie data={category_amount} dataKey="total_amount" nameKey="category_name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label={(entry) => entry.category_name} >
            {category_amount.map((entry, index) => (
             <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
             ))}
            </Pie>
        </PieChart>
    );
}
                              
