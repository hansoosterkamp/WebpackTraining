//import { Header } from "./header"
//import { Main } from "./main"
import * as React from "react";
import { useState } from "react"
import { useReducer} from "react"


// Destructured props
// App 
export const App = () => {

    // ===================================================
    // original code without useReducer:

    //const [checked, setChecked] = useState(false);

    //return (
    //    <div className="App">
    //        <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked) } />
    //        <label>{checked ? "Checked" : "Not Checked"}</label>
    //    </div>
    //);

    // ===================================================
    // Same code with useReducer:

    // Use reducer takes tow arguments
    // 1. What to change function
    // 2. Initial state
    const [checked, setChecked] = useReducer((checked) => !checked, false);

    // the use reducer function gets the name "setChecked", it can be used as
    // an event handler:

    return (
        <div className="App">
            <input type="checkbox" value={checked} onChange={setChecked} />
            <label>With use reducer: {checked ? "Checked" : "Not Checked"}</label>
        </div>
    );



}

