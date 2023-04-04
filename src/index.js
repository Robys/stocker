import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './app'
import "./css/style.css"

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(<App/>);