import { Link } from "react-router-dom";
import {
  SidebarConatiner,
  SidebarLink,
  SidebarList,
  SidebarLogo,
} from "./sidebar.styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ListIcon from "@material-ui/icons/List";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { AdminContext } from "../../App";
import { useContext } from "react";

const Sidebar = () => {
  const [loggedInAdmin, setLoggedInAdmin] = useContext(AdminContext);

  const isAdmin = loggedInAdmin.find(
    (admin) => admin.admin === sessionStorage.getItem("email")
  );
  return (
    <SidebarConatiner>
      <div className="mb-5 ml-5">
        <SidebarLogo to="/">Fotonia</SidebarLogo>
      </div>
      <div
        className="ml-5 sidebar d-flex flex-column justify-content-between  py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          <SidebarList>
            <SidebarLink to="/order">
              <AddShoppingCartIcon /> Order
            </SidebarLink>
          </SidebarList>
          <SidebarList>
            <SidebarLink to="/my-services">
              <ListIcon /> My Services
            </SidebarLink>
          </SidebarList>
          {isAdmin && (
            <div>
              <SidebarList>
                <SidebarLink to="/all-orders">
                  <ListAltIcon /> All Orders
                </SidebarLink>
              </SidebarList>
              <SidebarList>
                <SidebarLink to="/new-service">
                  <AddCircleOutlineIcon /> New Service
                </SidebarLink>
              </SidebarList>
              <SidebarList>
                <SidebarLink to="/new-admin">
                  <SupervisorAccountIcon /> New Admin
                </SidebarLink>
              </SidebarList>
            </div>
          )}
        </ul>
      </div>
    </SidebarConatiner>
  );
};

export default Sidebar;
