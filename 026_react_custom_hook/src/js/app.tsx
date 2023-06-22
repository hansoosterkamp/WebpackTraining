import * as React from "react";
import { FormEvent, useState } from "react"
import { Main } from "./main";
import { Header } from "./header";
import { UseInputElement } from "./useInputElementHook";

export const App = () => {
       
    // We now are going to wrap useDate into a "custom" hook
    // so that we can generalize the input handling
    // a custom hook is a function and the function name by convention
    // should start with "use..."

    //// custom hook, returns an array of two things
    //const useInputElement = <T,> (initialValue: T): [iInputProps, () => void]  =>
    //{
    // ......
    //}
   
    const _titleHook = new UseInputElement("");
    const _colorHook = new UseInputElement("#ffffff");

    const submitForm = (e: FormEvent) => {
        e.preventDefault();

        const t = `${_titleHook.value}, ${_colorHook.value}`
        alert(t);

        // reset all bound  / controlled form values:
        _titleHook.Reset();
        _colorHook.Reset();
    };

    //// instead of writing this:
    //// <input type="text" placeholder="my color title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
    //// we can use the spread operator to pass everything (value and onChange) in from and iInputProps:
    //// <input type="text" placeholder="my color title" {...titleProps}></input>

    return (
        <>
            <Header />

        <form onSubmit={submitForm}>
            <input type="text" placeholder="my color title" {..._titleHook.props} ></input>
            <input type="color" {..._colorHook.props } />
            <button type="submit">ADD</button>
            </form>

            <Main />
        </>

    );
}

