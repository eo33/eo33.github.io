import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';

import "./Footer.css";

function Footer(){
    return(
        <div class="container text-white border-top mt-5">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-4 ">
                <div class="col">
                    <h5>Home</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Skills</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Experience</a></li>
                    </ul>
                </div>

                <div class="col">
                    <h5>Projects</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Website development</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Technical writing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">SEO work</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Other work</a></li>
                    </ul>
                </div>

                <div class="col">
                    <h5>Socials</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">GitHub</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Linkedin</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Codecademy</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FreeCodeCamp</a></li>
                    </ul>
                </div>

                <div class="col">
                    <h5>Contact</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Email</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Calendly</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;