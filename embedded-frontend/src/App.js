import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Mainpage from './Mainpage/Mainpage';
import Teampage from './Teampage/Teampage';
import Uploadpage from './Uploadpage/Uploadpage';
import Footer from './Footer/Footer';

import {Routes,Route,Link} from "react-router-dom"
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Mainpage />}/>
        <Route path = "/teampage/:team_id" element = {<Teampage />}/>
        <Route path = "/uploadpage" element = {<Uploadpage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
