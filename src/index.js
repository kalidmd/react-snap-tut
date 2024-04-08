import React from 'react';
import { createRoot }  from 'react-dom/client';
import { RouterProvider} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import { router } from "./router"

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  </HelmetProvider>
);






