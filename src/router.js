import { createBrowserRouter } from "react-router-dom";
import Principio from "./paginas/inicio/Principio";
import AcercaDe from "./paginas/acerca/AcercaDe";
import Proyectos from "./paginas/proyectos/Proyectos";

export default createBrowserRouter([
    {
        path: '/',
        element:<Principio/>
    },
    {
        path:'/acerca',
        element:<AcercaDe/>
    },

    {
        path:'/proyectos',
        element:<Proyectos/>
    }
])