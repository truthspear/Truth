import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/ByteBlog.png'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);

    const closeNavHeader = () => {
        if(window.innerWidth < 800){
            setIsNavShowing(false);
        } else{
            setIsNavShowing(true)
        }
    }
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className="nav__logo" onClick={closeNavHeader}>
                <img src={Logo} alt="Navbar Logo" />
            </Link>
            {isNavShowing && <ul className="nav__menu">
                <li><Link to="/" onClick={closeNavHeader}>Home</Link></li>
                <li><Link to="/about" onClick={closeNavHeader}>About</Link></li>
                <li><Link to="/profile/sdfsdf" onClick={closeNavHeader}>Ernest Achiever</Link></li>
                <li><Link to="/create" onClick={closeNavHeader}>Create Post</Link></li>
                <li><Link to="/authors" onClick={closeNavHeader}>Authors</Link></li>
                <li><Link to="/logout" onClick={closeNavHeader}>LogOut</Link></li>
            </ul>}
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                {isNavShowing ? <AiOutlineClose/> : <FaBars />}
            </button>
        </div>

    </nav>
  )
}

export default Header