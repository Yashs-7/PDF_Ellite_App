import React from 'react'

import logo from './styles/logo.jpeg';
import { Link } from 'react-router-dom';
const Navbar = ({homeRef,aboutRef,contactRef}) => {

    const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };
      

    return (
        <>
            <nav className='navbar'>
                <div >
                    <div className="wrapper row1">
                        <header id="header"
                            className="hoc clear">
                            <div id="logo"
                                className="fl_left">
                               <Link to='/#home' onClick={() => {handleScroll(homeRef.current);}} > <img src={logo} alt=""className="logoimage"  />
                               </Link></div>
                            <nav id="mainav"
                                className="fl_right">
                                <ul className="clear">
                                    <li className=''  ><Link to='/#home' onClick={() => {handleScroll(homeRef.current);}} >Home</Link></li>
                                    <li className= '' ><Link to='/#about' onClick={() => {handleScroll(aboutRef.current);}} >About</Link></li>
                                    <li className= '' ><Link to='/#contact' onClick={() => {handleScroll(contactRef.current);}} >Contact</Link></li>
                                    <li className= '' ><Link to="/login"  >Login</Link></li>
                                    <li className= '' ><Link to="/signup" >Sign Up</Link></li>
                                </ul>
                            </nav>
                        </header>
                    </div>
                </div>
            </nav>




        </>
    )
}

export default Navbar
