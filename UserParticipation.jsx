import React, { useState } from "react";
import choices from "./Data";

function UserParticipation(){

const [vote,setVote] = useState(0)


return (
    <>
        {()=>{setVote(vote+1)}}
    </>
);
}



export default UserParticipation