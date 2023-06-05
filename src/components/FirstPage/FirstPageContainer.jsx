import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap'
import 'animate.css/animate.min.css';

import "./FirstPageContainer.css";
import MyImage from '../../assets/img.jpg';
import skillsData from './resources/skills.json';

function FirstPageContainer(){
    return(
        <div id="background-color">
            <div className="container">
                {/*About Me page*/}
                <div className="row justify-content-center d-flex">
                    <div className="col-lg-6 col-sm-9 p-4 ">
                        <img src={MyImage} alt="Image" 
                        className="img-fluid rounded border border-dark"/>
                    </div>
                    <div className="col-lg-6 col-sm-9 d-flex-col justify-content-center align-items-center p-3">
                        <h3 className=" text-white display-4 about-me">About me</h3>
                        <h5 className="lead text-white mt-3 py-2">I am a technical writer eager to transition into web development. I discovered my passion for web technologies after working on developing software documentation and help pages.</h5>
                        <div className="d-flex justify-content-end mt-2">
                            <button type="button" class="btn btn-primary">Download Resume</button>
                        </div>
                    </div>
                </div>
                {/*Skills text*/}
                <div className="row text-white mt-5">
                    <h4 className="display-5">Skills</h4>
                </div>
                <div className="row text-white mt-3">
                    <p className="text-center">Technical Writing / Web development</p>
                </div>

                {/*SKkills cards*/}
                <div class="row justify-content-center">
                    <div class="col-md-4 mx-auto card border-0">
                        <img src={""} alt="" class="card-img-top"/>
                        <div class="card-body">
                            <p class="card-text text-center">HTML 5</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FirstPageContainer;