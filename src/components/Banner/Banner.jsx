import React, { useState, useEffect }  from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap'
import 'animate.css/animate.min.css';

import "./Banner.css";
import descriptionData from './desc.json'


function Banner() {
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % descriptionData.desc.length);
        }, 2000);
    
        return () => {
          clearInterval(interval);
        };
      }, [descriptionData.desc.length]);

    return(
        <div className="jumbotron banner-container ">
            <Container fluid className="h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-1 text-white text-center mx-5 animate__animated animate__fadeIn">Edward Orlando</h1>
                {/*USE  {descriptionData.desc[currentIndex]}*/}
                <p class="lead text-white text-center">I am a {descriptionData.desc[currentIndex]}</p>
            </Container>
        </div>
    )
}

export default Banner;