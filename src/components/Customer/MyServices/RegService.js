import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

const RegService = ({ item }) => {
  const [orderDetails, setOrderDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const title = item.title.replace(/\s/g, "");
    fetch(
      `https://habitual-aeolian-celery.glitch.me/my-service-details?id=${item.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderDetails(data);
        // console.log(data.image);
        setLoading(false);
      });
  }, []);

  return (
    <div className="col-md-6 mb-4">
      {!loading && (
        <ServiceListContainer>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <img
                src={
                  orderDetails &&
                  `data:image/jpeg;base64,${orderDetails.image.img}`
                }
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
            </div>
            <div>
              <p style={{ margin: "0px" }}>
                <small>Category: {orderDetails.category}</small>
              </p>
              <p>Price: {orderDetails.price}$</p>
            </div>
          </div>
          <h5 className="font-weight-bold my-3">{orderDetails.title}</h5>
          <p className="text-secondary">{orderDetails.description}</p>
        </ServiceListContainer>
      )}
    </div>
  );
};

export default RegService;

const ServiceListContainer = styled.div`
  padding: 30px;
  box-shadow: 0 0 20px grey;
  border-radius: 10px;
  height: 300px;
`;
