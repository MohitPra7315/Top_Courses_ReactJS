import './inter.css';

export  function Inter(props){
    // console.log(props.name)
    return(
        <div className="interset">
            <h2>Interseted Tour</h2>
       

            <img className='rect' src={props.image}/>
            <div>
                <p>{props.name}</p>
                <h3 className='' style={{color:"green"}}>${props.price}</h3>
            </div>
        
        </div>
    )
}
