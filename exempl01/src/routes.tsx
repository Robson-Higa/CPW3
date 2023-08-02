import { RouteObject } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const routes: RouteObject[] = [
{
    path: '/',
    element: <Home />,
}, 

{
    path: '/about',
    element: <About />,
},

{
    path: '/contact',
    element: <Contact />,
},

]

export default routes