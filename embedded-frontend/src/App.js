import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Barchart from './Barchart/Barchart';
import Pichart from './Pichart/Pichart';
import Radarchart from './Radarchart/Radarchart';
import Linechart from './Linechart/Linechart';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='Graph1' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className='barGraph'>barGraph <Barchart /> </div>
        <div className='piGraph'>piGraph<Pichart /></div>
      </div>
      <div className='Graph2' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className='RadarGraph'>RadarGraph <Radarchart /> </div>
        
        
        <div className='LineGraph'>LineGraph  <Linechart /> </div>
      </div>

    </div>
    // <div>
    //   asd
    // </div>
  );
}

export default App;
