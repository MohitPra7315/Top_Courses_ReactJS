import { useState } from "react";
import Card from "./Card";
import { Inter } from './enter'
import "./Tours.css"
function Tours({ tours, like, RemoveTour, interisted, setLike }) {

  
   
    
    return (
        <div className="Tours-cont">
            <div className="heading">
                <h1> Choose your</h1>

            </div>
            <div className="Tour-Card">

                {
                    tours.map((tour,id) => {
                        return (<Card tour={tour} key={tour.id} RemoveTour={RemoveTour} like={like} setLike={setLike} interisted={interisted}></Card>
                        )
                    })

                }
            </div>

            <Inter like={like}></Inter>
        </div>
    );
}


export default Tours