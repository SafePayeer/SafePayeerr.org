import React  from "react";
import logo from './logo.png';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function Nav() {
    return ( <div className="nav">
       <img src={logo} className="App-logo2" alt="logo" />

        <ul className="head">

            <li><a  href="#">Home</a></li>
            <li><a  href="#Available-jobs">Available jobs</a></li>
            <li><a  href="#Apply-on-a-job">Apply on a job</a></li>
            <li><a  href="#Why-choose-us">Why choose us</a></li>
        </ul> <div className="bars"> 
        <FontAwesomeIcon icon={faBars}  />
    </div>
    </div> 
    );
}

export default Nav;