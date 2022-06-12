import React, {useContext, useEffect, useRef} from 'react'
import logo from '../../dager.png'
import { Link, useNavigate } from 'react-router-dom'
import './index.css'
import { homeRefContext } from '../LandingPage/index'
export function Navbar(){
    let navigate = useNavigate()
function Redirect(url){
    navigate(url)
}

    return(
        <div>
            <nav className='nav'>
                <div className="nav-container">
                <div className="logo">
                    <img onClick={() => Redirect('/')} src={logo} />
                </div>
                <div className="sec-section">
                    <div className="div-section">
                        <ul>
                           
                            <li><a onClick={() => Redirect('/contact')} className='btn-contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </nav>
             <div className="sidebar-bottom">
                <div className="sidebar-bottom2">
                <ul>
                    <li><i onClick={() => Redirect('/')} id={ window.location.pathname == '/' ? 'active-i' : ''} class={window.location.pathname == '/' ? 'bx bxs-home' : 'bx bx-home'} ></i></li>
                    <li><i onClick={() => Redirect('/about')} id={ window.location.pathname == '/about' ? 'active-i' : ''} class={window.location.pathname == '/about' ? 'bx bxs-user' : 'bx bx-user'}  ></i></li>
                    <li><i onClick={() => Redirect('/work')} id={ window.location.pathname == '/work' ? 'active-i' : ''} class={window.location.pathname == '/work' ? 'bx bxs-briefcase' : 'bx bx-briefcase'} ></i></li>
                    <li><i onClick={() => Redirect('/contact')} id={ window.location.pathname == '/contact' ? 'active-i' : ''} class={window.location.pathname == '/contact' ? 'bx bxs-help-circle' : 'bx bx-help-circle'} ></i></li>

                </ul>
                </div>
            </div> 
        </div>
    )
}