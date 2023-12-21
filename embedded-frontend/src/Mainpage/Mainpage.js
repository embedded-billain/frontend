import React,{useEffect, useState} from 'react';
import Card1 from '../Card/Card1'
import Card2 from '../Card/Card2'
import Card3 from '../Card/Card3'
import Barchart from '../Barchart/MainBarchart';
import Pichart from '../Pichart/MainPichart';
import Radarchart from '../Radarchart/Radarchart';
import Linechart from '../Linechart/Linechart';
import LoadingAnimation from '../Loading/Loading';
import axios from "axios";

const Mainpage =()=>{

  const [jsonData ,setJsonData] = useState();
  
  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await axios.get(`https://gachongo.shop/api/amount/team/all`);
        const response = await axios.get(`https://dongsseop2api.shop/amount/summary`);
        setJsonData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();

  }, [])
  
    // console.log(jsonData.total);
    if (!jsonData) {
      return( 
	  <div>
		<div style={{ fontSize: '24px', padding: '20px 0 0 0' }}>Loading...</div>
		<div><LoadingAnimation/></div>
	</div>
	  
	  )}
    return(
        <div>
        <div className='Graph0' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div className='Total'><Card1 myProp = {jsonData.total}/></div>
        <div className='Today'><Card2 myProp = {jsonData.today}/></div>
        <div className='D-Day'><Card3/></div>
      </div>
      <div className='Graph1' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' ,paddingLeft: '50px', marginTop: '20px'}}>
        <div className='barGraph'>팀별 최근 2개월 정산 금액 <Barchart myProp = {jsonData.teams} /> </div>
        <div className='piGraph'>카테고리별 정산 금액<Pichart myProp = {jsonData.category}/></div>
      </div>
      <div className='Graph2' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' ,marginBottom: '20px'}}>
        <div className='RadarGraph'>RadarGraph <Radarchart myProp = {jsonData.category} /> </div>
        
        
        <div className='LineGraph'>LineGraph  <Linechart myProp = {jsonData.teams} /> </div>
      </div> 
      </div>
    )
}
export default Mainpage;