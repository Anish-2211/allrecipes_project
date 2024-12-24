import {Navigate, Outlet} from "react-router-dom"



function PrivateRoute(){
    let token = localStorage.getItem(AuthContext);
    if(!token) return <Navigate to ="/login"/>
    return <Outlet/>
};
export default PrivateRoute;