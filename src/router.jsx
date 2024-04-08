import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import PageNotFound from "./pages/PageNotFound";
import UiDesign from "./pages/sub-pages/UiDesign";
import LandingPage from "./pages/sub-pages/LandingPage";
import All from "./pages/sub-pages/All";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <PageNotFound />,
    },
    {
        path: "works",
        element: <Works />,
        children: [
            {
                path: "",
                element: <All />
            },
            {
                path: "ui-design",
                element: <UiDesign />
            },
            {
                path: "landing-page",
                element: <LandingPage />
            }
        ]
    }
])