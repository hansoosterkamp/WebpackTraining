import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
export const App = () => {
    const [emotion, setEmotion] = useState("happy");
    return (_jsxs("div", Object.assign({ class: "App" }, { children: [_jsx("h1", { children: "Hello react useState hook " }), _jsx("p", { children: " the useState() function returns an array of two things" }), _jsx("p", { children: " First is a state variable name, second is the function how to set or update the key variable " }), _jsx("p", { children: " the variable value is accessible by using \"{variablename}\"" }), _jsx("pre", { children: "const [emotion, setEmotion] = useState(\"happy\"); // initial value is \"happy\"" }), _jsxs("h2", { children: ["Current emotion is: ", emotion] }), _jsx("button", Object.assign({ onClick: () => setEmotion("sad") }, { children: "Sad" })), _jsx("button", Object.assign({ onClick: () => setEmotion("exited") }, { children: "Excited" })), _jsx("button", Object.assign({ onClick: () => setEmotion("happy") }, { children: "Happy" }))] })));
};
