import React from "react";
import "./Service.css";
import services_Data from "../../assets/services_data.js";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>Services</h1>
      </div>
      <div className="services-container">
        {services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
