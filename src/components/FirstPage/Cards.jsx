import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';


function Cards(props){
    //console.log(images);
    const cardKeys = Object.keys(props.imagesPath)

    return(
        <div className="row justify-content-center gx-5 gy-2 mt-1 px-3">
            {/*Iterate through cards*/}
            {
                cardKeys.map(key=>(
                <div className="col-4 col-md-3 fs-5">
                    <div className="card bg-transparent border-0 align-items-center" style={{height:"90%"}}>
                        <img src={props.imagesPath[key]} alt={key} className="card-img-top" style={{height: '120px', width:"120px"}}/>
                        <div className="card-body">
                            <p className="card-title text-center">{key}</p>
                            {/*<p className="card-text text-center">{imagesPath[key][1]}</p>*/}
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Cards;