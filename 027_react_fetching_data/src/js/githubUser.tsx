import * as React from "react";
import * as ReactDOM from "react-dom";

// Git hub user component, note React components shoudl start with a capital casing
export const GithubUser = ({ name, location, avatar }) => {

    return (<div>
        <h1>{name}</h1>
        <p>{location}</p>
        <img src={avatar} height={150} alt={name} ></img>
    </div>)
}