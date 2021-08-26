import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext, UserInfo } from "../../App";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase";
// import { firebaseConfig } from "./firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useContext(UserInfo);
  const [loading, setLoading] = useState(true);

  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // console.log(loggedInUser);

  const fileUpload = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) {
          if (res) {
            fetch("https://habitual-aeolian-celery.glitch.me/registration", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ email, name }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  alert("user created suucessfully");
                }
              });
            setNewUser(false);
          }
        }
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setLoggedInUser(res.user);
        if (res.user) {
          fetch(
            `https://habitual-aeolian-celery.glitch.me/login?email=${email}`
          )
            .then((res) => res.json())
            .then((data) => {
              setUserInfo(data);
              sessionStorage.setItem("email", data.email);
              sessionStorage.setItem("name", data.name);
            });
        }
        history.replace(from);
      });
  };

  return (
    <>
      <Header />
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center my-5"
          style={{ height: "55vh" }}
        >
          <div className="w-50 p-4 border rounded">
            <h2 className="mt-2 mb-5 text-center">
              {newUser ? "Registration" : "Login"}
            </h2>
            <form>
              {newUser && (
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control form-control-lg"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="form-control form-control-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Your Password"
                  className="form-control form-control-lg"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <button
                    onClick={newUser ? handleRegistration : handleSignIn}
                    className="btn btn-warning btn-lg"
                  >
                    {newUser ? "Sign Up" : "Login"}
                  </button>
                </div>
                {newUser ? (
                  <p>
                    Have an account?{" "}
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => setNewUser(false)}
                    >
                      Login
                    </span>
                  </p>
                ) : (
                  <p>
                    Create an account?{" "}
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => setNewUser(true)}
                    >
                      Sign Up
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
