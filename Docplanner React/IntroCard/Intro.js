import React from "react";
import "./Intro.css";

const IntroCard = {
  logosrc: "https://www.docplanner.com/img/sygnet.png",
  logoalt: "logo1",
  title: "Making the healthcare experience more human",
  paragraph1:
    "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere. ",
  paragraph2:
    "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients"
};

const IntroItem = props => (
  <div>
    <center>
      <img
        alt={props.item.logoalt}
        className="logo1"
        src={props.item.logosrc}
      />

      <h1 style={{ color: "#00b39b" }}>{props.item.title}</h1>
    </center>
    <div className="paragraph-container">
      <p>{props.item.paragraph1}</p>
      <p>{props.item.paragraph2}</p>
    </div>
  </div>
);

const Intro = () => (
  <div className="intro-card">
    <IntroItem item={IntroCard} />
  </div>
);
export default Intro;
