import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="container my-5" style={{ height: "55vh" }}>
        <div className="w-50 mx-auto">
          <h2 className="mb-3">Contact Us</h2>
          <form>
            <div className="d-flex">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group ml-5">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control form-control-lg"
                cols="30"
                rows="5"
                placeholder="write your thoughts"
              ></textarea>
            </div>
            <div>
              <button className="btn btn-warning btn-lg">Send</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
