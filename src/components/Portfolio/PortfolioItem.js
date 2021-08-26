const PortfolioItem = ({ category, img, title }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-3">
      <img src={img} style={{ height: "500px" }} className="img-fluid" alt="" />
      <p>
        <small className="text-warning">Category: {category}</small>
      </p>
      <h4 className="mt-3">{title}</h4>
    </div>
  );
};

export default PortfolioItem;
