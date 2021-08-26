import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, UserInfo } from "../../App";
import { LogButton, Logo, MenuLink } from "./navbar.styles";
import firebase from "firebase/app";
import "firebase/auth";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useContext(UserInfo);

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedInUser({});
        setUserInfo({});
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("name");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo className="navbar-brand" to="/">
          Fotonia
        </Logo>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: "white" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <MenuLink className="nav-link" to="/">
                Home
              </MenuLink>
            </li>
            <li className="nav-item">
              <MenuLink className="nav-link" to="/all-services">
                Services
              </MenuLink>
            </li>
            <li className="nav-item">
              <MenuLink className="nav-link" to="/my-services">
                Dashboard
              </MenuLink>
            </li>

            <li className="nav-item">
              <MenuLink className="nav-link" to="/contact-us">
                Contact Us
              </MenuLink>
            </li>

            {sessionStorage.getItem("email") ? (
              <LogButton onClick={signOut} className="btn btn-warning">
                Log Out
              </LogButton>
            ) : (
              <LogButton className="btn btn-warning">
                <Link to="/login" className="text-decoration-none text-dark">
                  Login
                </Link>
              </LogButton>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
