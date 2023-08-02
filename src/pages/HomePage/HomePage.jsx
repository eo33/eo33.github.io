import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import "./HomePage.css";

// Components
import Banner from "../../components/FirstPage/Banner";
import Cards from "../../components/FirstPage/Cards";
import CareerDesc from "../../components/FirstPage/CareerDesc";

// Static objects
import desc from "../../textContent/desc.json";
import writtenContent from "../../textContent/writtenContent.json";
import strings from "../../textContent/strings.json";
import webDevSkills from "../../textContent/webDevSkills.json";
import twSeoSkills from "../../textContent/twSeoSkills.json";
import experience from "../../textContent/experience.json";
import education from "../../textContent/education.json";


function HomePage(){

    useEffect(() => {
        const handleScroll = () => {
          const skillsSection = document.getElementById("firstpage-skills");
          const experienceSection = document.getElementById("firstpage-experience");
          const sections = [skillsSection, experienceSection];
      
          sections.forEach((section) => {
            const position = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
      
            if (position < screenPosition) {
              section.classList.add("animate__fadeInLeft");
              section.classList.remove("hidden");
            } else {
              section.classList.remove("animate__fadeInLeft");
              section.classList.add("hidden");
            }
          });
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      
      
    return(
        <div className="add-scrollbar">
            <Banner content={desc}/>
            <div id="background-color">
                <div className="container">
                    {/*About Me page*/}
                    <div className="row justify-content-center d-flex">
                        <div className="col-lg-6 col-sm-9 p-4 ">
                            <img 
                                src="./assets/img.jpg" 
                                alt="Image" 
                                className="img-fluid rounded border border-dark animate__animated animate__fadeInLeft fade-in-left"
                            />
                        </div>
                        <div className="col-lg-6 col-sm-9 d-flex-col justify-content-center align-items-center p-3">
                            <h3 className=" text-white display-4 about-me">{strings.aboutTitle}</h3>
                            <h5 className="lead text-white mt-3 py-2 ">{writtenContent.introduction}</h5>
                            <div className="d-flex justify-content-end mt-2 mt-5">
                                <a href="./assets/RESUME_WD.pdf" download="EO_resume.pdf">
                                    <button type="button" class="btn btn-primary mt-4 button-bg mb-3">{strings.downloadResume}</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row text-white mt-md-5 py-md-5" id="firspage-webdev-skills">
                            <h4 className="display-5 mt-5 ">{strings.skillsTitle}</h4>
                    </div>
                    
                    <div className="animate__animated animate__fadeInLeft fade-in-left animate-left-scroll" id="firstpage-skills">
                        {/*Skill section*/}
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
                    </div>

                    {/*Education and Experience*/}
                    <div id="firstpage-experience-education"></div>
                    <div id="firstpage-experience" className="animate__animated animate__fadeInLeft fade-in-left animate-left-scroll">
                        <div className="row text-white mt-5 px-2">  
                            <CareerDesc desc={experience} title="Experience"/>
                            <CareerDesc desc={education} title="Education"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;