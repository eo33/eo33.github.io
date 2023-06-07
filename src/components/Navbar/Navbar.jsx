import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';

import "./Navbar.css";


function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav class="navbar nav-bg navbar-expand-sm navbar-light sticky-top" data-bs-theme="dark">
            <div className="container">
                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID" aria-controls="navbarID" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarID">

                    <ul className="navbar-nav">
                        <li className="nav-item active animate__animated animate__fadeIn">
                            <a class="nav-link active " href="#">Home</a>
                        </li>
                        <li className="nav-item animate__animated animate__fadeIn" >
                            <a class="nav-link " href="#">Projects</a>
                        </li>
                        <li className="nav-item animate__animated animate__fadeIn">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;