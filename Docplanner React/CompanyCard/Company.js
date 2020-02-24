import React from "react";
import "./Company.css";

const arr0 = [
  (title = { title: "We are a global" }),
  (title1 = { title: "company" }),
  (title2 = { title: "with local culture" })
];
const CompanyItem = props => <h4>{props.item.title}</h4>;
const Company = props => {
  return (
    <div className="company-card">
      <div className="title">
        <CompanyItem item={title} />
        <CompanyItem item={title1} />
        <CompanyItem item={title2} />
      </div>
      <div className="company">
        <ul>
          {props.data.map((el, i) => (
            <div className="list" key={i}>
              <li>
                <svg
                  xmlns={el.xmlns}
                  viewBox={el.viewbox}
                  width={el.width}
                  height={el.height}
                >
                  <path d={el.d} />
                </svg>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Company;
