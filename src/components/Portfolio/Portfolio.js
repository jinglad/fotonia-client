import portfolio_2 from "../../images/fashoin-portfolio.jpg";
import portfolio_3 from "../../images/journalism-portfolio.jpg";
import portfolio_6 from "../../images/nature-portfolio.jpg";
import portfolio_4 from "../../images/portrait-portfolio.jpg";
import portfolio_1 from "../../images/sports-portfolio.jpg";
import portfolio_5 from "../../images/wild-portfolio.jpg";
import PortfolioItem from "./PortfolioItem";

const fakeItem = [
  {
    category: "Sports",
    img: portfolio_1,
    title: "Champ's Sports Capturing",
  },
  {
    category: "fashion",
    img: portfolio_2,
    title: "Fashion Photoshoot",
  },
  {
    category: "journalism",
    img: portfolio_3,
    title: "Rural Photography",
  },
  {
    category: "portrait",
    img: portfolio_4,
    title: "Portrait Photography",
  },
  {
    category: "wild",
    img: portfolio_5,
    title: "Capturing the Wild",
  },
  {
    category: "nature",
    img: portfolio_6,
    title: "The Thunder",
  },
];

const Portfolio = () => {
  return (
    <>
      <h2
        className="my-5 text-center font-weight-bold"
        style={{ fontSize: "3rem" }}
      >
        Latest Work
      </h2>
      <div className="row mx-2">
        {fakeItem.map((item, i) => (
          <PortfolioItem
            key={i}
            title={item.title}
            category={item.category}
            img={item.img}
          />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
