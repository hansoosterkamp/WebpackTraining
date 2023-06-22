import { jsx as _jsx } from "react/jsx-runtime";
import { App } from "./app";
import * as React from "react";
import { createRoot } from 'react-dom/client';
import './../web/styles/index.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(_jsx(App, { tab: "home" }));
