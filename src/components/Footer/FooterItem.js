import { FooterItemConatiner } from "./footer.styles";

const FooterItem = ({ item }) => {
  return (
    <FooterItemConatiner className="col-lg-3 col-md-6 pl-5">
      <h4>{item.branch}</h4>
      <address>{item.address}</address>
      <p>{item.phone}</p>
      <p>{item.email}</p>
    </FooterItemConatiner>
  );
};

export default FooterItem;
