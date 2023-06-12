import React, { useState, useEffect }  from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap'
import 'animate.css/animate.min.css';

import "./Banner.css";


function Banner(props) {

  let descriptionData = props.content;
  const [descIndex, setDescIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDescIndex(prevDescIndex => (prevDescIndex + 1) % descriptionData.desc.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [descIndex]);

  return(
      <div className="jumbotron banner-container ">
          <Container fluid className="h-100 d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-1 text-white text-center mx-5 animate__animated animate__fadeIn">Edward Orlando</h1>

              <p class="lead text-white text-center">I am a {descriptionData.desc[descIndex]}</p>
          </Container>
      </div>
    )
}

export default Banner;