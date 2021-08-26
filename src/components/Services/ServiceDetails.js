import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AllServicesContext, ServiceContext } from "../../App";
import { Link } from "@material-ui/core";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useContext(ServiceContext);
  const [allService, setAllService] = useContext(AllServicesContext);
  const service = allService.find((item) => item._id === id);

  const img = `data:image/jpeg;base64,${service.image.img}`;

  return (
    <>
      <Header />
      <div className="container my-5 py-5" style={{ height: "55vh" }}>
        <div className="row">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              style={{ height: "400px" }}
              src={img}
              alt=""
            />
          </div>
          <div className="col-lg-5 mt-5 ml-3">
            <h3>{service.title}</h3>
            <p>
              <small>Category: {service.category}</small>
            </p>
            <p>{service.description}</p>
            <p>Price: {service.price}$ </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;
