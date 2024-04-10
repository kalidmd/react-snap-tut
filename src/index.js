import React from 'react';
import { hydrate, render } from "react-dom";
import { RouterProvider} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import { router } from "./router"

const APP = (<HelmetProvider>
  <div className='App'>
    <RouterProvider router={router} />
  </div>
</HelmetProvider>);

 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}




