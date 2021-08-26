import Sidebar from "../../Sidebar/Sidebar";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddAdmin = () => {
  const [admin, setAdmin] = useState("");
  const history = useHistory();

  const addAdmin = (e) => {
    e.preventDefault();
    fetch("https://habitual-aeolian-celery.glitch.me/addAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ admin }),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Admin added successfully");
          history.push("/");
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
          <h1 className="font-weight-bold mb-3">New Admin</h1>
          <div>
            <form action="">
              <div className="form-group w-50">
                <input
                  type="email"
                  name="email"
                  placeholder="john@gmail.com"
                  className="form-control form-control-lg"
                  onChange={(e) => setAdmin(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  onClick={addAdmin}
                  type="submit"
                  className="btn btn-warning btn-lg"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
