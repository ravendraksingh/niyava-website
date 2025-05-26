import { SERVICE_CARDS } from "@/constants/constants";
import styles from "./servicecards.module.css";

const ServiceCards = () => {
  return (
    <div className={styles.servicecard_container}>
      {SERVICE_CARDS.map((service) => (
        <a
          className={`${styles.service_card}`}
          key={"service_cardkey_" + service.id}
          href={service.url}
        >
          <img src={service.img} height={100} alt={`${service.title} icon`} />
          <div className="text-start text-md-center ms-3">
            <p className={styles.servicecard_title}>{service.title}</p>
            <p>{service.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ServiceCards;
