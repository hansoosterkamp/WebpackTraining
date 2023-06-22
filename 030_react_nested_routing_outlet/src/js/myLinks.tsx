import * as React from "react";
import { Link } from "react-router-dom"

export function MyLinks() {

    return (
        <>
            <div>The outlet url only seems to work with a react Link component</div>
            <div>Typing the url in the browser or using a normal hypowerlink does not seem to work</div>
            <nav>
                <Link to={"/"}>Home</Link> <br />
                <Link to={"/about"}>About</Link> <br />
                <Link to={"/about/history"}>About-History</Link><br />
                <Link to={"/contact"}>Contact</Link> <br />
            </nav>
            <br />
            <div> using a normal hyperlink does not work for outlets:</div>
            <div> Something needs to be changed in the web config???</div>
            <a href={"/about/history"}>About-History hyperlink</a><br />
        </>

    );

}

