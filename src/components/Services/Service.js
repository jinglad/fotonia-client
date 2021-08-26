import { useContext } from "react";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../App";
import { SingleService, SingleServiceContainer } from "./services.styles";

const Service = ({ item }) => {
  const { _id, title } = item;
  const [serviceDetails, setServiceDetails] = useContext(ServiceContext);

  console.log(item);

  const serviceInfo = () => {
    setServiceDetails(item);
    // console.log(item);
  };

  const img = `data:image/jpeg;base64,${item.image.img}`;

  return (
    <SingleServiceContainer className="col-lg-4 col-md-6">
      <SingleService>
        <img className="img-fluid" style={{ height: "400px" }} src={img} />
        <h5 className="font-weight-bold my-3">{title}</h5>
        <div className="d-flex justify-content-center">
          <div className="mr-3">
            <button className="btn btn-secondary btn-lg">
              <Link
                className="text-decoration-none text-white"
                to={`/service/${_id}`}
              >
                View More
              </Link>
            </button>
          </div>
          <div>
            <button onClick={serviceInfo} className="btn btn-warning btn-lg">
              <Link className="text-decoration-none text-white" to="/order">
                Buy Now
              </Link>
            </button>
          </div>
        </div>
      </SingleService>
    </SingleServiceContainer>
  );
};

export default Service;
