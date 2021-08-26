import { ReviewContainer, ReviewImage } from "./reviews.styles";

const Review = (props) => {
  const { name, position, img, review } = props.item;
  return (
    <div className="col-md-6 col-xl-4">
      <ReviewContainer className="d-flex align-items-center bg-light text-dark">
        <div className="mr-3">
          <ReviewImage src={img} alt="Customer Image" className="img-fluid" />
        </div>
        <div>
          <h4>{name}</h4>
          <h6>{position}</h6>
          <p>{review}</p>
        </div>
      </ReviewContainer>
    </div>
  );
};

export default Review;
