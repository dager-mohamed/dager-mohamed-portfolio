import React, { useEffect, useState, useRef, createContext } from "react";
import { Navbar } from "../index";
import { useNavigate } from "react-router-dom";
import "./index.css";
import developerSVG from "../../developer.png";
import img1 from '../../img/p-1.png'
import img2 from '../../img/p-2.PNG'
import img3 from '../../img/p-3.PNG'
import img4 from '../../img/p-4.PNG'
import img5 from '../../img/p-5.PNG'
import img6 from '../../img/p-6.PNG'
import img7 from '../../img/p-7.PNG'
import img8 from '../../img/p-8.PNG'
import img9 from '../../img/p-9.PNG'
export const homeRefContext = createContext();
export function Work() {
  let navigate = useNavigate();
  function Redirect(url) {
    navigate(url);
  }

  return (
    <div>
      <Navbar />

      <div className="work">
        <h1>My Work</h1>
        <div className="work-box">
          <div className="box-1 box-flex">
            <figure>
            <img src={img1} / >
              </figure>
          </div>
          <div className="box-2 box-flex">
            <figure>
          <img src={"https://i.imgur.com/2Lmw9uW.png"} / >
            </figure>
            </div>

            <div className="box-4 box-flex">
              <figure>
            <img src={"https://i.imgur.com/7FvBYxH.png"} / >
              </figure>
            </div>
            <div className="box-5 box-flex">
              <figure>
            <img src={"https://i.imgur.com/UBcG606.png"} / >
            </figure>
            </div>
            <div className="box-6 box-flex">
            <figure>
            <img src={"https://i.imgur.com/eEI80JZ.png"} / >
            </figure>
            </div>
            <div className="box-7 box-flex">
              <figure>
            <img src={"https://i.imgur.com/Z2m0AMa.png"} / >
              </figure>
            </div>
            <div className="box-8 box-flex">
              <figure>
            <img src={"https://i.imgur.com/Olm75Um.png"} / >
              </figure>
            </div>
            <div className="box-9 box-flex">
              <figure>
            <img src={"https://i.imgur.com/23Y02sr.png"} / >
              </figure>
            </div>
        </div>
        <br/>
        <br/>
        <div className="div-btn-work">
        <button onClick={() => window.open('https://www.freelancer.com/u/dagermohamed')}>See more on Freelancer</button>
        </div>
      </div>
      <div className="next-page-about">
        <i onClick={() => Redirect("/about")} class="bx bx-up-arrow-alt"></i>
      </div>
      <div className="next-page">
        <i onClick={() => Redirect("/contact")} class="bx bx-down-arrow-alt"></i>
      </div>
    </div>
  );
}
