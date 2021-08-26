import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ServiceContext } from "../../../App";
import Sidebar from "../../Sidebar/Sidebar";

const Order = () => {
  const [serviceDetails, setServiceDetails] = useContext(ServiceContext);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  const { title, _id } = serviceDetails;
  const email = sessionStorage.getItem("email");
  const name = sessionStorage.getItem("name");

  console.log(_id);

  const handleOrder = (e) => {
    e.preventDefault();
    fetch("https://habitual-aeolian-celery.glitch.me/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, address, phone, title, id: _id }),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Your Order submitted successfuly");
          history.push("/my-services");
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-8 mt-5">
          <h1 className="font-weight-bold mb-5">Order</h1>
          <div style={{ background: "lightgray" }} className="p-5 rounded mb-4">
            <form style={{ width: "600px", marginTop: "80px" }}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="form-control form-control-lg text-dark"
                  value={name}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className="form-control form-control-lg text-dark"
                  value={email}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  className="form-control form-control-lg text-dark"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="form-control form-control-lg text-dark"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="service"
                  placeholder="Service Name"
                  className="form-control form-control-lg text-dark"
                  value={title}
                />
              </div>
              <div>
                <input
                  type="submit"
                  className="btn btn-warning btn-lg"
                  value="Submit"
                  onClick={handleOrder}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
