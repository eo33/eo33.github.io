import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "./ProjectSamples.css";

import projectSamples from "../../textContent/projectSamples.json";

function ProjectSamples(props) {
  const formattedPath = props.path
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const breadcrumb = `> ${formattedPath}`;

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <div className="display-5 text-white">{formattedPath}</div>
        </div>
      </div>

      <div className="row mt-1 ">
        <div className="col mb-4">
          <div className="text-white">
            <Link to="/Projects" className="project-word">
              Projects
            </Link>{" "}
            {breadcrumb}
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          {/*Iterate over each cards*/}
          {projectSamples[props.path].map((elem) => (
            <div class="card my-2 py-4 bg-transparent text-white border-0 border-bottom rounded-0">
              <div class="row g-0 card-row">
                <div class="col-md-4 card-image-div p-2">
                  <a href={elem["link"]}>
                    <img
                      src={elem["image"]}
                      class="img-fluid card-image-style border border-1 rounded"
                    />
                  </a>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title fs-1">📋 {elem["name"]}</h5>
                    <p class="card-text">{elem["description"]}</p>
                    <h5 class="card-title fs-3">🛠️ Tech used</h5>
                    <p class="card-text">
                      <small class="text-white">{elem["techUsed"]}</small>
                    </p>
                    <div className="row">
                      <div className="col-5 col-sm-4 col-lg-2">
                        <a
                          href={elem["link"]}
                          class="btn btn-primary px-1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Check project
                        </a>
                      </div>
                      <div className="col-5 col-sm-4 col-lg-2">
                        {elem["sourceCode"] === "" ? (
                          <></>
                        ) : (
                          <a
                            href={elem["sourceCode"]}
                            class={`btn btn-secondary px-1 `}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSamples;
