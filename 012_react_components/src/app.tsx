import { Header } from "./header"
import { Main } from "./main"
import * as React from "react";
import * as ReactDOM from "react-dom";

// App 
export const App = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}