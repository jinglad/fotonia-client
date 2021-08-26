import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import AllServices from "./components/AllServices/AllServices";
import { createContext, useState } from "react";
import Order from "./components/Customer/Order/Order";
import MyServices from "./components/Customer/MyServices/MyServices";
import ServiceDetails from "./components/Services/ServiceDetails";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";
import NewService from "./components/Admin/NewService/NewService";
import AllOrders from "./components/Admin/AllOrders/AllOrders";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import { useEffect } from "react";

export const ServiceContext = createContext();
export const UserContext = createContext();
export const AllServicesContext = createContext();
export const UserInfo = createContext();
export const AdminContext = createContext();

function App() {
  const [serviceDetails, setServiceDetails] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allService, setAllService] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [loggedInAdmin, setLoggedInAdmin] = useState([]);

  useEffect(() => {
    fetch("https://habitual-aeolian-celery.glitch.me/admins")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoggedInAdmin(data);
      });
  }, []);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserInfo.Provider value={[userInfo, setUserInfo]}>
        <AdminContext.Provider value={[loggedInAdmin, setLoggedInAdmin]}>
          <AllServicesContext.Provider value={[allService, setAllService]}>
            <ServiceContext.Provider
              value={[serviceDetails, setServiceDetails]}
            >
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/all-services">
                    <AllServices />
                  </Route>
                  <Route exact path="/contact-us">
                    <ContactUs />
                  </Route>
                  <PrivateRoute exact path="/order">
                    <Order />
                  </PrivateRoute>
                  <PrivateRoute exact path="/my-services">
                    <MyServices />
                  </PrivateRoute>
                  <PrivateRoute exact path="/new-admin">
                    <AddAdmin />
                  </PrivateRoute>
                  <PrivateRoute exact path="/new-service">
                    <NewService />
                  </PrivateRoute>
                  <PrivateRoute exact path="/all-orders">
                    <AllOrders />
                  </PrivateRoute>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/service/:id">
                    <ServiceDetails />
                  </Route>
                </Switch>
              </Router>
            </ServiceContext.Provider>
          </AllServicesContext.Provider>
        </AdminContext.Provider>
      </UserInfo.Provider>
    </UserContext.Provider>
  );
}

export default App;
