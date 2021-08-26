import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://habitual-aeolian-celery.glitch.me/getOrders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-9 mt-5">
          <h1 className="font-weight-bold mb-3">All Orders</h1>
          <div style={{ background: "lightgray" }} className="p-5 rounded mb-4">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Service</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {!loading &&
                  orders.length > 0 &&
                  orders.map((order) => (
                    <tr className="border">
                      <td>{order.name}</td>
                      <td>{order.email}</td>
                      <td>{order.title}</td>
                      <td>{order.address}</td>
                      <td>{order.phone}</td>
                      <td>
                        <select
                          style={{
                            border: "none",
                            padding: "5px",
                            outline: "none",
                          }}
                        >
                          <option value="pending">Pending</option>
                          <option value="in-progress">In progress</option>
                          <option value="done">Done</option>
                        </select>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
