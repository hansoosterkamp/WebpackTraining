import * as React from "react";
import { App } from "./app"
import { About } from "./about"
import { History } from "./history"
import { Contact } from "./contact"

import {BrowserRouter, Routes, Route } from "react-router-dom"

// To make use of Browser routing all fucntionality is wrapped within
// BrowserRouter component
// All individual routes are defined within the "Routes" component

// Note the nested route within about. The "history" path has not beginning slash

export const RoutingApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} >
                    <Route element={<History />} path="history" />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );

}