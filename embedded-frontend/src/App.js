import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Mainpage from './Mainpage/Mainpage';
import Teampage from './Teampage/Teampage';
import Uploadpage from './Uploadpage/Uploadpage';
import Footer from './Footer/Footer';
import TeamManagepage from './TeamManagepage/TeamManagepage';

import {Routes,Route,Link} from "react-router-dom"
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='MainContent'>
      <Routes>
        <Route path = "/" element = {<Mainpage />}/>
        <Route path = "/teampage/:team_id" element = {<Teampage />}/>
        <Route path = "/uploadpage" element = {<Uploadpage />}/>
        <Route path = "/teamManage" element = {<TeamManagepage />}/>
      </Routes>
      </div>
      <Footer className='Footer' />
    </div>
  );
}

export default App;
