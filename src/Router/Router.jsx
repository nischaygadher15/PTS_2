import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Review from "../Pages/Review";
import Contact from "../Pages/Contact";
import PageNotFound from "../Pages/PageNotFound";

let Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Service /> },
      { path: "/review", element: <Review /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default Router;
