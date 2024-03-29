import React from "react";
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend} from 'recharts';
const data = [
    {
      "subject": "Math",
      "A": 120,
      "B": 110,
      "fullMark": 150
    },
    {
      "subject": "Chinese",
      "A": 98,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "English",
      "A": 86,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "Geography",
      "A": 99,
      "B": 100,
      "fullMark": 150
    },
    {
      "subject": "Physics",
      "A": 85,
      "B": 90,
      "fullMark": 150
    },
    {
      "subject": "History",
      "A": 65,
      "B": 85,
      "fullMark": 150
    }
  ]
  // "category": [
  //   {
  //       "amount": 906220375,
  //       "categoryName": "Bills"
  //   },
  export default function SimpleRadarchart(props) {
    const category_amount = props.myProp;
    
    return (
        <RadarChart outerRadius={90} width={730} height={250} data={category_amount}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category_name" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Category" dataKey="total_amount" stroke="#82ca9d" fill="#a4de6c" fillOpacity={0.6} />
            {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
            <Legend />
        </RadarChart>
    )

}
