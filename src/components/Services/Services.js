import Service from "./Service";
import { ServicesContainer, ServicesHeading } from "./services.styles";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AllServicesContext } from "../../App";
import LoadingGif from "../../images/loading.gif";
import { Link } from "react-router-dom";

const Services = () => {
  const [featuredServices, setFeaturedServices] = useState([]);
  const [allService, setAllService] = useContext(AllServicesContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://habitual-aeolian-celery.glitch.me/getServices")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllService(data);
        setFeaturedServices(data.slice(0, 3));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div>
          <img src={LoadingGif} alt="" />
        </div>
      </div>
    );
  }

  return (
    <ServicesContainer>
      <ServicesHeading>Featured Services</ServicesHeading>
      <div className="row">
        {allService.length > 0 &&
          featuredServices.map((item, i) => <Service key={i} item={item} />)}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div>
          <Link to="/all-services" className="text-decoration-none text-white">
            <button className="btn btn-primary btn-lg">See More</button>
          </Link>
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
