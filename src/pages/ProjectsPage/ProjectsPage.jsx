import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./ProjectsPage.css";
import {Link, useLocation} from "react-router-dom";

import projectDescription from "../../textContent/projectDescription.json"

const ProjectsPage = () => {
  return (
    <div id="project-background-color">
      <div className="container text-white">
        {/*Title*/}
        <div className="row mt-4 mb-2">
          <div className="col display-5">
            Projects
          </div>
        </div>
        {/*Project cards*/}
        <div className="row row-cols-1 row-cols-md-2 justify-content-center">
          {
            projectDescription.map(key=>( 
              <div className="col g-4 mb-3">
                <div className="card h-100 bg-transparent text-white border-0">
                  <div className="card-body">
                    <h5 className="card-title text-center fs-3 mb-4">{key.title}</h5>
                    <Link to={`${key.title.toLowerCase().replace(/ /g, "-")}`}>
                      <img src={key.image} alt={`${key.title} image`} className="card-img-top rounded" />
                    </Link>
                    <p class="card-text mt-3 p-2 fs-5">
                      {key.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;