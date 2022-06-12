import React, { useEffect, useState, useRef, createContext } from "react";
import { Navbar } from "../index";
import { useNavigate } from "react-router-dom";
import "./index.css";
import developerSVG from "../../developer.png";
export const homeRefContext = createContext();
export function AboutPage() {
  let navigate = useNavigate();
  function Redirect(url) {
    navigate(url);
  }

  return (
    <div>
      <Navbar />

      <div className="about">
        <h1>About Me</h1>
        <h3>
          Since beginning my journey as a Full-stack web developer nearly +4
          years, I've done many websites for my business & people's businesses,
          and worked with many teams to create websites and I work hard to
          produce high quality for my clients, and I'm trying to learn
          everything about web development.
        </h3>
        <br/>
        <h1>My Skills</h1>
        <ul>
            <li>Full Javascript Developer (MERN)</li>
            <li>HTML / HTML5 / EJS</li>
            <li>CSS / CSS3</li>
            <li>Javascript - Node js</li>
            <li>React js(redux, react hooks, react-router, Material UI)</li>
            <li>Bootstrap / TailwindCSS</li>
            <li>Express js</li>
            <li>Rest API</li>
            <li>Database - MongoDB(Mongoose)</li>
        </ul>
      </div>
      <div className="next-page-about">
        <i onClick={() => Redirect("/")} class="bx bx-up-arrow-alt"></i>
      </div>
      <div className="next-page">
        <i onClick={() => Redirect("/work")} class="bx bx-down-arrow-alt"></i>
      </div>
    </div>
  );
}
