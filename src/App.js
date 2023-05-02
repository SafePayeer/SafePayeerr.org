import React from 'react';
import logo from './logo2.jpg';
import logomean from './logo.png'
import { Counter } from './features/counter/Counter';
import './App.css';
import Nav from './nav'
import { useSelector } from 'react-redux';
import BackImg from './backimg';
import Quotes from './quotes';
import AvailableJobsInOurCompany from './availableJobs';
import WhyChooseUs from './ChooseUs';
import FixedImage from './fixedImage';
import ApplyOnTheJobWith from './Apply';
import SendMessageToUs from './Send';
import Footer from './footer';

function App() {
  const state = useSelector((state) => state);

 /* console.log(state.account)*/

  return (
    <div className="App">

      <Nav />
      <BackImg />
      <Quotes />    
      <AvailableJobsInOurCompany />
      <WhyChooseUs />
      <FixedImage />
      <ApplyOnTheJobWith />
      <SendMessageToUs /><br /><br /><br /><br /><br /><br /><br /><br />
      <img src={logo} className="App-logo" alt="logo" /> <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <footer>
      <div className='footer'> <img src={logomean} className="App-logo4" alt="logo" />
      
   
      <Footer/>
      
        
    
        
  


       
   </div>  </footer>
    </div>
  );
}

export default App;
