import React from "react";
import "./Footer.css";

const pargraph1 = {
  text:
    "We are leaders in 10 countries: Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Colombia, Brazil, Argentina and Chile"
};
const pargraph2 = {
  text:
    "This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser."
};

const FooterItem = props => (
  <div>
    <p>{props.item.text}</p>
  </div>
);

const Footer = () => (
  <div className="footer">
    <FooterItem item={pargraph1} />
    <FooterItem item={pargraph2} />
  </div>
);
export default Footer;
