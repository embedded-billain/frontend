import React,{useEffect, useState} from 'react';
import Card1 from '../Card/Card1'
import Card2 from '../Card/Card2'
import Card3 from '../Card/Card3'
import Barchart from '../Barchart/MainBarchart';
import Pichart from '../Pichart/MainPichart';
import Radarchart from '../Radarchart/Radarchart';
import Linechart from '../Linechart/Linechart';
import axios from "axios";

const Mainpage =()=>{

  const [jsonData ,setJsonData] = useState();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://gachongo.shop/api/amount/team/all`);
        setJsonData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();

  }, [])
  
    // console.log(jsonData.total);
    if (!jsonData) {
      return <div>Loading...</div>; // You can customize the loading indicator
      }
    return(
        <div>
        <div className='Graph0' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div className='Total'><Card1 myProp = {jsonData.total}/></div>
        <div className='Today'><Card2 myProp = {jsonData.today}/></div>
        <div className='D-Day'><Card3/></div>
      </div>
      <div className='Graph1' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className='barGraph'>barGraph <Barchart myProp = {jsonData.teams} /> </div>
        <div className='piGraph'>piGraph<Pichart myProp = {jsonData.category}/></div>
      </div>
      <div className='Graph2' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className='RadarGraph'>RadarGraph <Radarchart /> </div>
        
        
        <div className='LineGraph'>LineGraph  <Linechart /> </div>
      </div> 
      </div>
    )
}
export default Mainpage;