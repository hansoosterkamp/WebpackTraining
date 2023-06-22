//import { Header } from "./header"
//import { Main } from "./main"
import * as React from "react";
import * as ReactDOM from "react-dom";

import { useState, useEffect } from "react";


// Destructured props
// App 
export const App = () => {

    const [emotion, setEmotion] = useState("happy"); // initial value is entered in use state
    const [secondaryEmotion, setSecondaryEmotion] = useState("tired"); // initial value is entered in use state

    useEffect(() => { document.getElementById("testdiv").innerText = `it's ${emotion} right now` },
        [emotion]); //will only react on first emotion, not on the secondary

    return (
        <div class="App">

            <h1>Hello react use effect hook </h1>
            <p>This hook is mostly used for: Console logging, manage side effects are not releated to a components render, loading data, setting animations useEffect takes to parameters:</p>
            <p>1: a function what to do </p>
            <p>2: when to do it, this second parameter is called <i>the dependency array</i> </p>
            <p> when passed nothing as dep arr., every time state changes it will trigger useEffect.</p>
            <p> when passed an empty [] only one (first time) it will trigger effect.</p>
            <p> when passed one or more state key values [emotion, secondaryEmotion] will trigger whjenever this value(s) changes. </p>
            
            <h2>Current emotion is: {emotion}</h2>
            <button onClick={() => setEmotion("sad")}>Sad</button>
            <button onClick={() => setEmotion("exited")}>Excited</button>
            <button onClick={() => setEmotion("happy")}>Happy</button>
            <h2>Secondary emotion is: {secondaryEmotion}</h2>
            <button onClick={() => setSecondaryEmotion("fit")}>fit</button>
            <button onClick={() => setSecondaryEmotion("tired")}>tired</button>
            <button onClick={() => setSecondaryEmotion("full of energy")}>full of energy</button>

        </div>
    );
}

