import React from "react";
import styles from "./Services.module.css";

const ServicesWrapper = ({ services }) => (
    <div className={styles.servicesWrapper}>
        <div className={styles.services}>
            {services.map((element) => {
                const service = element.service;
                return (
                    <p
                        key={service}
                        className={[styles.service, "p2"].join(" ")}
                    >
                        {service}
                    </p>
                );
            })}
        </div>
    </div>
);
export default ServicesWrapper;
