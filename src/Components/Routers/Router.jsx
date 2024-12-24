import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import SignUp from "../SignUp/signup";
import Login from "../Login/Login";
import User from "../User";
import UserProfile from "../UserProfile";
import UserSettings from "../UserSettings";
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Home from "../Home/Home"
import Checkout from "../Checkout/Checkout"
import AuthProvider from "../AuthProvider/AuthProvider"


function Router() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/user/profile" element={<UserProfile />} /> */}

        <Route path="/user" element={<User />}>
          {/* children = outlet component */}
          <Route path="profile" element={<UserProfile />} />
          <Route path="settings" element={<UserSettings />} />
        </Route>

<Route element={<PrivateRoute />}>
  <Route path = "/home" element={<Home/>} />
  <Route path = "/checkout" element={<Checkout/>} />
</Route>



        <Route path="/login" element={<Login />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default Router;
