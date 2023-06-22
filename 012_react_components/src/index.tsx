import { App } from "./app"
import * as React from "react";
import * as ReactDOM from "react-dom";

export class PageLogic {

    constructor() {


    }

    public init() {

        ReactDOM.render(
            <App />,
            document.getElementById("root")
        );
    }
}


// *************************************************************************
// Last thing to do Self execute
// *************************************************************************

(() => {

    window.addEventListener("load", () => { new PageLogic().init(); })

})();

