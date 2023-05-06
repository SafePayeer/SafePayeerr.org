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
import { CSSProperties } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from 'react';
import { useEffect } from 'react';
import intro from './intro.jpg';
import Rotateimg from './rotateimg';


function App() {
const [loading , setloading ] = useState(false);
useEffect(()=>{
  setloading(false);
  setTimeout(()=>{
    setloading(false)
  },[6000])
});
  const state = useSelector((state) => state);

  /* console.log(state.account)*/

  return (
    <div className="App">
    {
      loading ?
Image={intro}

    :
    <div> 
    <Nav />
    <BackImg />
    <Quotes />
    <AvailableJobsInOurCompany />
    <WhyChooseUs />
    <FixedImage />
    <ApplyOnTheJobWith />
    <SendMessageToUs />
    <Rotateimg />
    <footer>
      <div className='footer'> <img src={logomean} className="App-logo4" alt="logo" />


        <Footer />








      </div>  </footer>
  </div>
    }

</div>
  );
}

export default App;
