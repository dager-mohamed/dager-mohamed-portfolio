import React, { useEffect, useState, useRef, createContext } from "react";
import { Navbar } from "../index";
import { useNavigate } from "react-router-dom";
import "./index.css";
import developerSVG from "../../developer.png";
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
