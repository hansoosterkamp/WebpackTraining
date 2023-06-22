//import { Header } from "./header"
//import { Main } from "./main"
import * as React from "react";
import * as ReactDOM from "react-dom";

import { useState } from "react";


// Destructured props
// App 
export const App = () => {

    const [emotion, setEmotion] = useState("happy"); // initial value is entered in use state
    

    return (
        <div class="App">
            <h1>Hello react useState hook </h1>
            <p> the useState() function returns an array of two things</p>
            <p> First is a state variable name, second is the function how to set or update the key variable </p>
            <p> the variable value is accessible by using "&#123;variablename&#125;"</p>
            <pre>
                const [emotion, setEmotion] = useState("happy"); // initial value is "happy"
            </pre>
            <h2>Current emotion is: {emotion}</h2>
            <button onClick={() => setEmotion("sad")}>Sad</button>
            <button onClick={() => setEmotion("exited")}>Excited</button>
            <button onClick={() => setEmotion("happy")}>Happy</button>
        </div>
    );
}

