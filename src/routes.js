import Homes from "./components/Homes"
import Details from "./components/Details"
import Login from "./components/Login"
import Register from "./components/Register"

const routes =[
    {
        path:'/homes',component:Homes
    },
    {
        path:'/details/:id',component:Details
    },
    {
        path:'/login',component:Login
    },
    {
        path:'/register',component:Register
    },
    {
        path:'*',redirect:'/homes'
    }
]

export default routes