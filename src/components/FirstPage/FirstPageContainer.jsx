import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import "./FirstPageContainer.css";

// Components
import Cards from "./Cards.jsx";
import CareerDesc from "./CareerDesc";

// Static objects
import writtenContent from "./writtenContent.json";
import strings from "./strings.json";
import webDevSkills from "./webDevSkills.json";
import twSeoSkills from "./twSeoSkills.json";
import experience from "./experience.json";
import education from "./education.json";


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
                            <h3 className=" text-white display-4 about-me">{strings.aboutTitle}</h3>
                            <h5 className="lead text-white mt-3 py-2">{writtenContent.introduction}</h5>
                            <div className="d-flex justify-content-end mt-2 mt-5">
                                <button type="button" class="btn btn-primary mt-4 button-bg">{strings.downloadResume}</button>
                            </div>
                        </div>
                    </div>

                    {/*Web dev skills*/}
                    <div className="row text-white mt-md-5 py-md-5" id="firstpage-skills">
                        <h4 className="display-5 mt-5">{strings.skillsTitle}</h4>
                    </div>
                    <div className="row text-white mt-1">
                        <p className="text-center display-6">{strings.skillsHeading_1}</p>
                    </div>
                    {/*Web dev cards*/}
                    <Cards imagesPath={webDevSkills}/>
                    {/*Tech writing skills*/}
                    <div className="row text-white mt-2">
                        <p className="text-center display-6">{strings.skillsHeading_2}</p>
                    </div>
                    {/*TW SEO cards*/}
                    <Cards imagesPath={twSeoSkills}/>

                    {/*Education and Experience*/}
                    <div id="firstpage-experience"></div>
                    <div className="row text-white mt-5 px-2">  
                        <CareerDesc desc={experience} title="Experience"/>
                        <CareerDesc desc={education} title="Education"/>
                    </div>
                </div>
            </div>
        
    )
}

export default FirstPageContainer;