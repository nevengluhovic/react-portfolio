import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import home2 from "../img/home2.png";

function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> service.
        </h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={clock} alt="icon" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={money} alt="icon" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={diaphragm} alt="icon" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={teamwork} alt="icon" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
}

export default ServicesSection;
