import React from 'react';
import Card1 from '../Card/Card1'
import Card2 from '../Card/Card2'
import Card3 from '../Card/Card3'
import Barchart from '../Barchart/Barchart';
import Pichart from '../Pichart/Pichart';
import Radarchart from '../Radarchart/Radarchart';
import Linechart from '../Linechart/Linechart';

const Mainpage =()=>{
    return(
        <div>
        <div className='Graph0' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div className='Total'><Card1/></div>
        <div className='Today'><Card2/></div>
        <div className='D-Day'><Card3/></div>
      </div>
      <div className='Graph1' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className='barGraph'>barGraph <Barchart /> </div>
        <div className='piGraph'>piGraph<Pichart /></div>
      </div>
      <div className='Graph2' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className='RadarGraph'>RadarGraph <Radarchart /> </div>
        
        
        <div className='LineGraph'>LineGraph  <Linechart /> </div>
      </div> 
      </div>
    )
}
export default Mainpage;