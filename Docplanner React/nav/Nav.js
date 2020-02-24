import React from "react";
import "./nav.css";

const logo = {
  logosrc: "https://www.docplanner.com/img/logo-default-group-en.svg?v=1",
  logoalt: "img1"
};
const NavItem2 = props => (
  <img alt={props.item.logoalt} className="img1" src={props.item.logosrc} />
);
const Nav = props => {
  return (
    <div className="header">
      <div>
        <NavItem2 item={logo} />
      </div>
      <div className="nav-item">
        {props.data.map((el, i) => (
          <a
            style={{ color: el.isGreen ? "#00b39b" : "#747474" }}
            href={el.link}
          >
            {el.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
