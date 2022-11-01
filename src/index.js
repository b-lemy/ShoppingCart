import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ShoppingProvider} from "./Context/context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ShoppingProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ShoppingProvider>
    </React.StrictMode>
);


