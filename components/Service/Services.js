import React from "react";
import styles from "./services.module.css";
import { ALL_SERVICES } from "@/constants/constants";

const Services = () => {
  return (
    <div className="d-flex flex-wrap flex-lg-row gap-4 mt-4 m-lg-4 p-lg-4">
      {ALL_SERVICES.map((service) => (
        <div
          className={`card mx-auto ${styles.custom_card}`}
          key={"service#card#key#" + service.id}
        >
          <img src={"./" + service.image} className="card-img-top" alt="" />
          <div className="card-body d-flex flex-column justify-content-between align-items-start">
            <h5 className="card-title">{service.title}</h5>
            <p className="card-text">{service.description}</p>
            <a href={service.url} className="btn btn-primary">
              Know more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
