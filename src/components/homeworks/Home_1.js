import React from "react";

function Home1(props) {
    return(
        <div className="box center">
            <img src = {props.O.img} />
            <p> Name : {props.O.name} </p>
            <p> Position : {props.O.position} </p>
            {`${props.O.website}` == "" ? <p><br></br></p> : <p> Website : <a href = "#"> {props.O.website} </a> </p>}
        </div>
    );
}

export default Home1;