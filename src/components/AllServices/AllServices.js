import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import fashion from "../../images/fashion.jpg";
import { fakeServices } from "../Services/Services";
import Service from "../Services/Service";
import { useContext, useEffect } from "react";
import { AllServicesContext } from "../../App";
import { useState } from "react";
import LoadingGif from "../../images/loading.gif";

const AllServices = () => {
  const [allService, setAllService] = useContext(AllServicesContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://habitual-aeolian-celery.glitch.me/getServices")
      .then((res) => res.json())
      .then((data) => {
        setAllService(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading ? (
        <div>
          <Header />
          <div className="mx-5 my-5 py-5">
            <h2
              className="my-3 text-center font-weight-bold"
              style={{ fontSize: "4rem" }}
            >
              Our Services
            </h2>
            <div className="row">
              {allService.length > 0 &&
                allService.map((item, i) => <Service key={i} item={item} />)}
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div>
            <img src={LoadingGif} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default AllServices;
