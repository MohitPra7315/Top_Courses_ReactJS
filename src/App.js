import Tours from "./Component/Tours";
import "./App.css"
import data from "./data";
import { useState, useEffect } from "react";
import { Inter } from './Component/enter'

const App = () => {

    const [tour, setTour] = useState(data)
    const [like, setLike] = useState([

    ]);
    // console.log(tour.filter((item)=>item.name=="Goa"))
    console.log(like)





    function RemoveTour(id) {
        const newTour = tour.filter(tou => tou.id !== id)
        setTour(newTour);
    }


    // function interisted(id) {
    //     console.log(id)
    //     if (like.includes(tour.id)) {
    //         const interes = tour.filter((touid) => (touid !== tour.id))
    //         // remove from array phale sa h
    //         setLike(interes)
    //     } else {
    //         // 
    //         const interes = tour.filter((tour) => tour.id == id)
    //         setLike((like) =>(like,interes.id)


    //         )
    //     }

    // }

    // function interisted(id) {
    //     console.log(id)
    //     if (like.includes(id)) {
    //         return setLike(tour.find((item) => item.id !== id))

    //     } else {
    //         if (like.length === 0) {
    //             return setLike([tour.forEach((tou) => tou.id == id)])
    //         } else {
    //             return setLike((prev) => [...prev, tour.id])
    //         }

    //     }

    // }

    function interisted(data) {
        console.log(data);
        //   setLike([data])
        if (like.includes(data.id)) {
            setLike((item) => item.id !== data.id)
        }
        else {
            if (like.length === 0) {
                setLike([data])
            } else {
                setLike((prev) => [...prev, data])
            }
        }
    }




    return (

        <div className="cont">
            <Tours tours={tour} RemoveTour={RemoveTour} like={like} setLike={setLike} interisted={interisted} ></Tours>
            <div className="rect">
                {
                    like.map((item, id) => (
                        <Inter key={item.id} {...item} ></Inter>
                    ))
                } 
            </div>

        </div>
    )
}
export default App;