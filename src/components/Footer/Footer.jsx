import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import {Link, useLocation, useMatch } from "react-router-dom";

import "./Footer.css";

function Footer(){
    return(
        <div class="container text-white border-top mt-5 " >
            {/*<footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-4 "> */}
            <footer class="row p-3 g-4" data-bs-theme="dark">
                <div class="col-6 col-md-3">
                    <a class="nav-link text-white"><h5>Home</h5></a>
                    <ul class="nav flex-column ">
                        <li class="nav-item mb-2">
                            <a href="/" class="nav-link p-0">About</a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="/#firspage-webdev-skills" class="nav-link p-0">Skills</a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="/#firstpage-experience-education" class="nav-link p-0">Experience & Education</a>
                        </li>
                    </ul>
                </div>

                <div class="col-6 col-md-3">
                    <Link to="/projects" class="nav-link p-0 text-white">
                        <h5>Projects</h5>
                    </Link>
                    <ul class="nav flex-column ">
                        <li class="nav-item mb-2">
                            <Link to="/projects/web-development" class="nav-link p-0">Website development</Link>
                        </li>
                        <li class="nav-item mb-2">
                            <Link to="/projects/technical-writing" class="nav-link p-0">Technical writing</Link>
                        </li>
                        <li class="nav-item mb-2">
                            <Link to="/projects/seo-work" class="nav-link p-0">SEO work</Link>
                        </li>
                    </ul>
                </div>

                <div class="col-6 col-md-3">
                    <a><h5>Socials</h5></a>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="https://github.com/eo33/" target="_blank" class="nav-link p-0">GitHub</a></li>
                        <li class="nav-item mb-2"><a href="https://www.linkedin.com/in/edward-o-5b67801b3/" target="_blank" class="nav-link p-0">Linkedin</a></li>
                        <li class="nav-item mb-2"><a href="https://www.codecademy.com/profiles/object8333617013" class="nav-link p-0">Codecademy</a></li>
                        <li class="nav-item mb-2"><a href="https://www.freecodecamp.org/edorlando33" class="nav-link p-0">FreeCodeCamp</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-3">
                    <a><h5>Contact</h5></a>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="mailto:edorlando33@gmail.com" class="nav-link p-0">Email</a></li>
                        <li class="nav-item mb-2">

                            <a
                                className="nav-link p-0"
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
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;