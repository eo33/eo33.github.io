import React, { useState, useEffect, useRef }  from "react";
import {Link, useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import "./Navbar.css";

function Navbar() {
    // To create button for small screen
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    // To create "Active state" in Navbar items
    const location = useLocation();

    // To create drop-down
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);
    const dropdownRef = useRef(null);
    const closeDropdown = () => setIsDropdownOpen(false);
    
    // To close drop down whenever user click on the page
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            closeDropdown();
          }
        };
    
        window.addEventListener('click', handleOutsideClick);
    
        return () => {
          window.removeEventListener('click', handleOutsideClick);
        };
      }, [isDropdownOpen]);
    
    return (
        <nav className="navbar nav-bg navbar-expand-sm navbar-light sticky-top" data-bs-theme="dark">
            <div className="container">
                <button 
                    className="custom-toggler navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarID" 
                    aria-controls="navbarID" 
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation" 
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarID">

                    <ul className="navbar-nav">
                        <li className="nav-item animate__animated animate__fadeIn">
                            <Link 
                                to="/" 
                                className={`${location.pathname === '/' ? 'active' : ''} nav-link`}
                            >
                                Home
                            </Link>
                        </li>
                        {/*Project page*/}
                        <li className="nav-item animate__animated animate__fadeIn" >
                            <Link 
                                to="/Projects"
                                className={`${location.pathname === '/Projects' ? 'active' : ''} nav-link`}
                            >
                                Projects
                            </Link>
                        </li>
                        {/*Dropdown*/}
                        <li 
                            className="nav-item dropdown"
                            ref={dropdownRef}    
                        >
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                aria-expanded={isDropdownOpen ? 'true' : 'false'}
                                onClick={ () => {handleDropdownToggle();}
                                }
                            >
                                Contact
                            </a>
                            <div className={`border-2 dropdown-bg dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <a className="dropdown-item nav-link" href="mailto:edorlando33@gmail.com">Email</a>
                                <a
                                    className="dropdown-item nav-link "
                                    href="https://calendly.com/edorlando33/30-min"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (window.Calendly) {
                                            window.Calendly.initPopupWidget({ url: 'https://calendly.com/edorlando33/30-min' });
                                        }
                                    }}
                                    >
                                    Schedule a call
                                </a>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;