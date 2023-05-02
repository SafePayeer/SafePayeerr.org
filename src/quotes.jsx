import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

function Quotes() {
    useEffect (() => {
AOS.init({duration: 2000})
    },[])
    return ( <div className="Quotes"><br /><br /><br />
        <h1 className="h1">Some quotes</h1><br /><br /><br /><br /><br /><br /><br />
        <q data-aos="flip-right"  className="quote-child">Get It Done Fast, Cost Effective and With Professional Results to Outsource Your Medical Data Entry Functions </q>
        <code><center>― Sophia Nora ―</center></code>
        <q data-aos="zoom-in" className="quote-child">Get It Done Without any efforts, Save your time and just let your money talk </q>
        <code><center>― Mohammed ―</center></code>
        <q data-aos="flip-left" className="quote-child">Get It Done Without any efforts, Save your time and just let your money talk </q>
        <code><center>― Mohammed ―</center></code>
        <q data-aos="fade-up" className="quote-child">Get It Done Without any efforts, Save your time and just let your money talk </q>
        <code><center>― Mohammed ―</center></code>
        <q data-aos="fade-down" className="quote-child">Get It Done Without any efforts, Save your time and just let your money talk </q>
        <code><center>― Mohammed ―</center></code>
        <q data-aos="zoom-in" className="quote-child">Get It Done Without any efforts, Save your time and just let your money talk </q>
        <code><center>― Mohammed ―</center></code>
    </div> );
}

export default Quotes;