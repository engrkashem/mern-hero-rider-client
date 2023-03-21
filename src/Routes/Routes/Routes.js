import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import RiderProfile from "../../components/Rider/RiderProfile";
import Main from "../../Layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rider-profile',
                element: <RiderProfile></RiderProfile>
            }
        ]
    }
])

export default router;