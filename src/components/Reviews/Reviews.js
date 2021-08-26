import img_1 from "../../images/review-1.jpg";
import img_2 from "../../images/review-2.jpg";
import img_3 from "../../images/review-3.jpg";
import Review from "./Review";

const fakeReviews = [
  {
    name: "CHANEL IMAN",
    position: "CEO of Pinterest",
    img: img_2,
    review:
      "Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque",
  },
  {
    name: "ADRIANA LIMA",
    position: "Founder of Instagram",
    img: img_1,
    review:
      "Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.",
  },
  {
    name: "ANNE HATHAWAY",
    position: "Lead Designer at Behance",
    img: img_3,
    review:
      "Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.",
  },
];

const Reviews = () => {
  return (
    <div className="mt-5 py-5 text-white" style={{ background: "#2f273b" }}>
      <h3
        className="text-center font-weight-bold my-5"
        style={{ fontSize: "3rem" }}
      >
        Reviews
      </h3>
      <div className="row mx-3">
        {fakeReviews.map((item, i) => (
          <Review key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
