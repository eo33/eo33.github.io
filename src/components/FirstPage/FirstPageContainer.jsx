import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import "./FirstPageContainer.css";

// Components
import Cards from "./Cards.jsx";
import CareerDesc from "./CareerDesc";

// Static objects
import webDevSkills from "./webDevSkills.json";
import twSeoSkills from "./twSeoSkills.json";
import experience from "./experience.json";


function FirstPageContainer(){
    return(
        <div id="background-color">
            <div className="container">
                {/*About Me page*/}
                <div className="row justify-content-center d-flex">
                    <div className="col-lg-6 col-sm-9 p-4 ">
                        <img src="./assets/img.jpg" alt="Image" 
                        className="img-fluid rounded border border-dark"/>
                    </div>
                    <div className="col-lg-6 col-sm-9 d-flex-col justify-content-center align-items-center p-3">
                        <h3 className=" text-white display-4 about-me">About me</h3>
                        <h5 className="lead text-white mt-3 py-2">I am a technical writer eager to transition into web development. I discovered my passion for web technologies after working on developing software documentation and help pages.</h5>
                        <div className="d-flex justify-content-end mt-2">
                            <button type="button" class="btn btn-primary mt-4">Download Resume</button>
                        </div>
                    </div>
                </div>

                {/*Web dev skills*/}
                <div className="row text-white mt-5">
                    <h4 className="display-4">Skills:</h4>
                </div>
                <div className="row text-white mt-4">
                    <p className="text-center display-6">Web development</p>
                </div>
                {/*Web dev cards*/}
                <Cards imagesPath={webDevSkills}/>
                
                {/*Tech writing skills*/}
                <div className="row text-white mt-3">
                    <p className="text-center display-6">Tech Writing and SEO</p>
                </div>
                {/*TW SEO cards*/}
                <Cards imagesPath={twSeoSkills}/>

                {/*Education and Experience*/}
                <div className="row text-white mt-5">
                    <p className="display-6">Education</p>
                    <CareerDesc desc={experience}/>
                </div>

            </div>
        </div>
    )
}

export default FirstPageContainer;