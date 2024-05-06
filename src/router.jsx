import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
// --pages--
import PageNotFound from "./pages/PageNotFound";
import NestedPage2 from "./pages/sub-pages/NestedPage2";
import NestedPage3 from "./pages/sub-pages/NestedPage3";
import NestedPage1 from "./pages/sub-pages/NestedPage1";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <PageNotFound />,
    },
    {
        path: "about-us/",
        element: <AboutUs />,
        children: [
            {
                path: "",
                element: <NestedPage1 />
            },
            {
                path: "nested-page-2",
                element: <NestedPage2 />
            },
            {
                path: "nested-page-3",
                element: <NestedPage3 />
            }
        ]
    }
])