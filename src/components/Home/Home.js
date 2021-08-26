import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Portfolio />
      <Reviews />
      <div className="my-5 w-75 mx-auto">
        <h2 className="text-center">Get In Touch</h2>
        <div className="d-flex justify-content-center">
          <div className="w-50 mr-3">
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <button className="btn btn-primary btn-lg">
              Join The Newsletter
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
