import React from "react";
import "./Info.css";

const card0 = {
  title: "The world's",
  title1: " biggest healthcare platform",
  paragraph:
    "We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.",
  logosrc: "https://www.docplanner.com/img/sygnet.png"
};

const InfoItem2 = props => (
  <div className="box0">
    <div>
      <h1>{props.item.title}</h1>
      <h1>{props.item.title1}</h1>
      <p>{props.item.paragraph}</p>
    </div>
    <div>
      <img src={props.item.logosrc} alt="logoinfo" className="logoinfo" />
    </div>
  </div>
);
const Info = props => {
  return (
    <div className="info-card">
      <div className="card0">
        <InfoItem2 item={card0} />
      </div>
      <div className="cards">
        {props.data.map((el, i) => (
          <div
            className="box"
            style={{ marginTop: el.islower ? "20px" : "0px" }}
          >
            <img src={el.logosrc} alt="" />
            <h3>{el.title}</h3>
            <p>{el.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
