import React, { useState, useEffect }  from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Banner.css";
import 'animate.css/animate.min.css';
import {Container} from 'react-bootstrap'
import descriptionData from './desc.json'

//class="container-fluid bg-secondary"
function Banner() {
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % descriptionData.desc.length);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [descriptionData.desc.length]);

    return(
        <div className="jumbotron vh-100">
            <Container fluid className="banner-container h-50 d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-1 text-white text-center">Edward Orlando</h1>
                {/*USE  {descriptionData.desc[currentIndex]}*/}
                <p class="lead text-white text-center">I am a {descriptionData.desc[0]}</p>
            </Container>
        </div>
    )
}

export default Banner;