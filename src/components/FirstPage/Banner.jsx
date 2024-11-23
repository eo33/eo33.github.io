import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import "animate.css/animate.min.css";
import Typewriter from "typewriter-effect";
import data from "../../textContent/desc.json";

import "./Banner.css";

function Banner(props) {
  let descriptionData = props.content;
  const [descIndex, setDescIndex] = useState(0);

  return (
    <div className="jumbotron banner-container ">
      <Container
        fluid
        className="h-100 d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="display-1 text-white text-center mx-5 animate__animated animate__bounce animate__delay-1s">
          Edward Orlando
        </h1>

        <p class="lead text-white text-center">
          I am a{" "}
          <Typewriter
            options={{
              strings: data.desc,
              autoStart: true,
              loop: true,
              wrapperClassName: "lead text-white text-center",
            }}
          />
        </p>
      </Container>
    </div>
  );
}

export default Banner;
