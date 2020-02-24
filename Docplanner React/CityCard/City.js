import React from "react";
import "./City.css";

const intro = {
  title: "Improve the lives of millions. Change yours forever",
  paragraph:
    "More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops."
};
const IntroCity = props => (
  <div>
    <h1>{props.data.title}</h1>
    <p>{props.data.paragraph}</p>
  </div>
);
const City = props => {
  return (
    <div className="city-card">
      <div className="intro-city">
        <IntroCity data={intro} />
      </div>
      <div className="card-city">
        {props.data.map((el, i) => (
          <div key={i} className="place">
            <img src={el.imgsrc} alt="" />
            <div className="placename">
              {el.title}
              <button>{el.buttonName}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default City;
