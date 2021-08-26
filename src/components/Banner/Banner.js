import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner_1 from "../../images/carousel-1.jpg";
import banner_2 from "../../images/carousel-2.jpg";
import banner_3 from "../../images/carousel-3.jpg";
import { DarkShadow } from "./banner.styles";

const Banner = () => {
  return (
    <div>
      <DarkShadow>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img src={banner_1} alt="" />
          </div>
          <div>
            <img src={banner_2} alt="" />
          </div>
          <div>
            <img src={banner_3} alt="" />
          </div>
        </Carousel>
      </DarkShadow>
    </div>
  );
};

export default Banner;
