import { useState } from "react";
import "./Card.css"

function Card({ tour,  RemoveTour, interisted, like,setLike }) {
// console.log(tour)

  const id =tour.id
  const name=tour.name
  const info=tour.info
  const price=tour.price
  const image=tour.image

    const [isShow, setIsshow] = useState(true)

    function ReadMoreHandler() {
        setIsshow(!isShow)
    }
    const[pa,setPa]=useState([])





    const derc = `${info.substring(0, 200)}....`;
    // console.log(name);
    return (
        <div className="card-cont">
            <div className="img-cont">
            <img src={image} className="" ></img>

            </div>
            <div className="info">
                <div className="rate-info">
                    <h2 className="Price">${price}</h2>
                    <h2 className="name">{name}</h2>

                </div>
                <div className="para-combo">
                    <p className="para">{isShow ? derc : info}




                        <span className="Readbtn" onClick={ReadMoreHandler}>
                            {
                                isShow ? "Read More" : "Show less"
                            }
                        </span> </p>
                </div>
                <div className=" Butoons">
                    <button className="Notin" style={{cursor:"pointer"}} onClick={() => { return (RemoveTour(id), console.log(id)) }}>Not-Instred</button>
                    <button className="interest" style={{cursor:"pointer"}} onClick={()=>{  (interisted(tour))}} >intrested</button>

                </div>            </div>

        </div>
    );
} export default Card;