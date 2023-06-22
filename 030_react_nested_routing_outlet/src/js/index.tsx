import { RoutingApp } from "./routingApp"
import * as React from "react";
import { createRoot } from 'react-dom/client';
import './../web/styles/index.css' // add as inline style


// since we've added this entry point with "defer" in the
// template html, we can safely execute now:

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

    <RoutingApp />
);

