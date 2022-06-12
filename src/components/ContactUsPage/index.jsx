import React, { useEffect, useState, useRef, createContext } from "react";
import { Navbar } from "../index";
import { useNavigate } from "react-router-dom";
import "./index.css";
import developerSVG from "../../developer.png";
export const homeRefContext = createContext();
export function ContactUs() {
  let navigate = useNavigate();
  function Redirect(url) {
    navigate(url);
  }

  return (
    <div>
      <Navbar />

      <div className="contact">
        <h1>Contact Us</h1>
        
      </div>
      <div className="next-page-about">
        <i onClick={() => Redirect("/work")} class="bx bx-up-arrow-alt"></i>
      </div>

    </div>
  );
}
