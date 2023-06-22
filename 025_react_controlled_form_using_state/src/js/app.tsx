import * as React from "react";
import { FormEvent } from "react"

export const App = () => {
       

    const [title, setTitle] = React.useState<string>("");
    const [color, setColor] = React.useState<string>("#ffffff");


    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        alert(`${title}, ${color}`)

        // reset all bound  / controlled form values:
        setTitle("");
        setColor("#ffffff")
    };
     

    return (
        <form onSubmit={submitForm}>
            <input type="text" placeholder="my color title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <button type="submit">ADD</button> 
        </form>
    );

}

