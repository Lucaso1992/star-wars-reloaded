import Home from "../views/Home-view";
import Detail from "../views/Detail-view";
import Login from "../components/Login/Login"

const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/detail/:resource/:id',
        element: <Detail/>
    },
    {
        path: '/login',
        element: <Login/>
    }
]

export default routes;