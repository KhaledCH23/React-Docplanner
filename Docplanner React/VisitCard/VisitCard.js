import React from "react";
import "./VisitCard.css";

const VisitCard = {
  title: "For patients",
  description: "Find a doctor, book a visit and solve any health-related doubt",
  buttonName: "CHOOSE COUNTRY",
  imagesrc: "https://www.docplanner.com/img/screen-marketplace@2x.png",
  imagealt: "img2",
  isGreen: true,
  isBtnExist: true
};
const VisitCard2 = {
  title: "For doctors",
  description: "Save time managing visits and cut no-shows by half",
  imagesrc: "https://www.docplanner.com/img/screen-saas@2x.png",
  imagealt: "img3",
  isGreen: false,
  isBtnExist: false
};

const VisitItem = props => (
  // <div style={{ backgroundColor: props.item.isGreen ? "#00b39b" : "#3d83df" }}>
  <div>
    <span>{props.item.title}</span>
    <h2>{props.item.description}</h2>
    <button
      className="btn"
      style={{ display: props.item.isBtnExist ? "flex" : "none" }}
    >
      {props.item.buttonName}
    </button>
    <figure>
      <img
        className="img23"
        src={props.item.imagesrc}
        alt={props.item.imagealt}
      />
    </figure>
  </div>
);

const Visit = () => {
  return (
    <div className="visit-card">
      <div className="visit-container">
        <div className="patients">
          <VisitItem item={VisitCard} />
        </div>
      </div>
      <div className="visit-container">
        <div className="doctors">
          <VisitItem item={VisitCard2} />
        </div>
      </div>
    </div>
  );
};
export default Visit;
