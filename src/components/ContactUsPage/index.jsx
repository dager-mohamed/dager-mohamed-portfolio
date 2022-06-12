import React, { useEffect, useState, useRef, createContext } from "react";
import { toast, ToastContainer } from 'react-toastify'
import { Navbar } from "../index";
import { useNavigate } from "react-router-dom";
import "./index.css";
import developerSVG from "../../developer.png";

import emailjs from 'emailjs-com'
export const homeRefContext = createContext();
export function ContactUs() {
  let navigate = useNavigate();
  function Redirect(url) {
    navigate(url);
  }
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [subject, setSbuject] = useState(null);
  const [message, setMessage] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [checkSent, setSent] = useState(false)
  const toggleHover = () => setHovered(!hovered);
  async function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_ohnn978', 'template_h23acug',e.target, 'JkCUUtGZO2_fX79v3')
      .then((result) => {
          console.log(result.status);
          if(result.status == 200){
            setSent(true)
          }
      }, (error) => {
        setSent(false)
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div>
      <Navbar />
      <div className={checkSent ? "success on" : "success"}>
          <div className="success2">
          <p>Sent successfully</p>
          </div>
        </div>
      <div className="contact">
        <h1>Contact Us</h1>
        <form onSubmit={sendEmail}>
        <div className="login-page">
          <div className="login-content">
            <span>Name:</span>
            <input
              name="name"
              required={true}
              className="input-username-password"
              type={"text"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <span>Email:</span>
            <input
              name="email"
              required={true}
              className="input-username-password"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <span>Subject:</span>
            <input
              name="subject"
              required={true}
              className="input-username-password"
              type={"text"}
              onChange={(e) => setSbuject(e.target.value)}
            />

            <br />
            <span>Message:</span>
            <textarea
              name="message"
              required={true}
              className="input-username-password"
              onChange={(e) => setSbuject(e.target.value)}
              cols="10"
              rows={"8"}
            />
            <br />
            <div className="btn-send">
              <button
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                type="submit"
              >
                <i className={"bx bx-send"}></i>Send
              </button>
            </div>
          </div>
        </div>
        </form>
      </div>
      <div className="next-page-about">
        <i onClick={() => Redirect('/work')} class="bx bx-up-arrow-alt"></i>
      </div>
      <ToastContainer/>
    </div>
  );
}
