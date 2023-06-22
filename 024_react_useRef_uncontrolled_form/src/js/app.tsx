import * as React from "react";
import { FormEvent, useRef } from "react"



// UseRef to references uncontrolled form values, 
// in general you can useRef to reach out to an element 
// and check out what its value is.

export const App = () => {

    const txtTitle = useRef<HTMLInputElement>(null);   
    const hexColor = useRef<HTMLInputElement>(null);   

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        const title = txtTitle.current?.value;
        const color = hexColor.current?.value;
        alert(`${title}, ${color}`)

        resetFormToDefaults();
    };

    const resetFormToDefaults = () => {
        txtTitle.current.value = "";
        hexColor.current.value = "#ffffff";
    };


    // Note: that adding a button without setting any type submist the form as well!
    //
    // Note: The "ref" attribute is unique to react it binds the "current" property value of the variable (e.g. txtTitle)
    // to the input element so txtTitle.current is a the HTMLInputElement itself.
    // This prevents a lot of const i = getElementById(someid) stuff.
    // the "ref" attribute is not rendered in the html.

    return (
        
        <form onSubmit={submitForm}>
            <input ref={txtTitle} type="text" placeholder="my color title"></input>
            <input ref={hexColor} type="color" />
            <button type="submit" >ADD</button> 
        </form>
    );

}

