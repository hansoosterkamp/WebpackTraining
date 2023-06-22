import * as React from "react";
import { MyLinks } from "./myLinks";
import {Outlet } from "react-router-dom"

export function About() {
    return (
        <>
            <MyLinks />
            <h3>About</h3>
            <div>This is about this website</div>
            <Outlet />
        </>
    )
}