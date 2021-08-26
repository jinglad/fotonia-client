import { FooterItemConatiner } from "./footer.styles";
import FooterItem from "./FooterItem";

const footerData = [
  {
    branch: "Dhaka",
    address: "Road 13, Sector 13, Uttara",
    phone: "+8801777777777",
    email: "info@fotonia.com",
  },
  {
    branch: "Chattagram",
    address: "Fatehabad, Hathazari",
    phone: "+8801777777788",
    email: "info@fotonia.com",
  },
  {
    branch: "Sylhet",
    address: "Madina-market, Sylhet",
    phone: "+8801777777797",
    email: "info@fotonia.com",
  },
];

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <div className="row mx-3 py-5">
        {footerData.map((item, i) => (
          <FooterItem key={i} item={item} />
        ))}
        <div className="col-lg-3 col-md-6">
          <h4>Follow Us</h4>
          <FooterItemConatiner className="d-flex">
            <div className="mr-5">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Linkedin</p>
            </div>
            <div>
              <p>Dribble</p>
              <p>Behance</p>
              <p>Pinterest</p>
            </div>
          </FooterItemConatiner>
        </div>
      </div>
    </div>
  );
};

export default Footer;
