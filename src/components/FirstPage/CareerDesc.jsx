import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';


function CareerDesc(props){

    return(
        <div className="col-12 col-md-6 mt-4">
            <div className="row w-100 border-bottom border-2">
                <div className="col-4 display-5 mb-4">
                    {props.title}
                </div>
            </div>

            {/*Dynamically create rows*/}
            {
                props.desc.map((item)=>(
                    <div className="row w-100 mt-4 mb-4 fs-5">
                        <div className="col-5 col-lg-3" >
                            {`${item["startDate"]} - ${item["endDate"]}`}
                        </div>
                        <div className="col-7 col-lg-9">
                            <div className="row fw-bold">
                                {item["title"]}
                            </div>
                            <div className="row mt-3">
                                {item["institution"]}
                            </div>
                            <div className="row mt-3">
                                {item["description"]}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    )
}

export default CareerDesc;