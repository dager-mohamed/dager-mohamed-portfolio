import React, { useEffect, useState, useRef, createContext } from "react";
import { Navbar } from "../index";
import { useNavigate } from 'react-router-dom'
import './index.css'
import developerSVG from '../../developer.png'
export const homeRefContext = createContext()
export function Landing() {
   
    let navigate = useNavigate()
    function Redirect(url){
        navigate(url)
    }
    const homeRef = useRef()
    const aboutRef = useRef()
    useEffect(()=>{
        
    },[])

  return (
    <div>
        <Navbar homeRef={homeRef}/>
        
        <div className="main">
            <div ref={homeRefContext} className="container-landing">
                <div className="sec-1-landing">
                    <h1>Hello, I am <span>dagermohamed</span></h1>
                    <h2><span>I am a </span>Full-Stack web developer</h2>
                    <div className="btn-section-landing">
                        <button onClick={() => Redirect('/about')}>About</button>
                    </div>
                </div>
                <div className="sec-2-landing">
                <img src={developerSVG}/>
                </div>
            </div>
        </div>
        <div>
            
        </div>
        <div className="next-page">
        <i onClick={() => Redirect('/about')} class='bx bx-down-arrow-alt' ></i>
            </div>
      </div>
  );
  
}