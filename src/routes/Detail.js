import React from "react";

function Detail({location}){
    console.log(location.state.summary);
    const summary =location.state.summary;
return (
    <div>
        <h1>{summary}</h1>
    </div>
)
}

export default Detail;