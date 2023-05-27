import React from "react";
import UserParticipation from "./UserParticipation";



function PollDisplay(props){

    return(
        <>
        <div>
        <input type="radio" value={props.label} checked= {UserParticipation}  /> {props.label}
        <p> votes {props.vote}</p>
      </div>
        </>
    )
}



export default PollDisplay