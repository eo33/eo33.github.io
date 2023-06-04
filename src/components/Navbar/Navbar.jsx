import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Navbar.css"


const Navbar= () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    
    return(
        <nav class="navbar nav-bg fixed-top navbar-expand-sm navbar-light" data-bs-theme="dark">
            <div className="container">

                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">

                <ul className="navbar-nav mb-auto">
                    <li className="nav-item active">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;