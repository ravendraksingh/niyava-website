import { SERVICE_CARDS } from "@/constants/constants";
import React from "react";
import styles from "./allservices.module.css";

const AllServices = ({ theme }) => {
  return (
    <div
      className={`container py-3 ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <div className={`${styles.card_container}`}>
        {SERVICE_CARDS.map((service) => (
          <a
            className={`${
              theme === "dark" ? styles.card_dark : styles.card_light
            }`}
            key={"service_cardkey_" + service.id}
            href={`/service/${service.url}`}
          >
            <div className={`mb-3`}>
              <img
                src={`/images/${service.img}`}
                height={64}
                width={64}
                alt={`${service.title} icon`}
              />
            </div>
            <div className="">
              <p className={styles.servicecard_title}>{service.title}</p>
              <p>{service.description}</p>
            </div>
            <div>
              <p className={theme === "dark" ? styles.know_more_dark : ""}>
                Know More{" "}
                <img
                  src="/icons/arrow-right.svg"
                  height={22}
                  alt="Right arrow icon"
                />
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
