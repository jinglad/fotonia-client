import { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import RegService from "./RegService";
import LoadingGif from "../../../images/loading.gif";

const MyServices = () => {
  const [myService, setMyService] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://habitual-aeolian-celery.glitch.me/my-services?email=${sessionStorage.getItem(
        "email"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyService(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        {!loading ? (
          <div className="col-md-8 mt-5">
            <h1 className="font-weight-bold">My Services</h1>
            <div style={{ background: "lightgray" }} className="p-5 rounded">
              <div className="row">
                {myService.map((item, i) => (
                  <RegService key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <div>
              <img src={LoadingGif} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyServices;
