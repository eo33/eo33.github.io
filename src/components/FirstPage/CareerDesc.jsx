import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';


function CareerDesc(props){

    return(
        <div className="col-12 mx-4">

            <div className="row">
                <div className="col-4">
                    {`${props.desc[0]["startDate"]} - ${props.desc[0]["endDate"]}`}
                </div>
                <div className="col-8">
                    {props.desc[0]["title"]}
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-8">
                    {props.desc[0]["institution"]}
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-8">
                    {props.desc[0]["description"]}
                </div>
            </div>
        </div>
    )
}

export default CareerDesc;