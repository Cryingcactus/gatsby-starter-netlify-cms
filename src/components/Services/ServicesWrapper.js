import React from "react";
import PropTypes from "prop-types";
import styles from "./Services.module.css";

const ServicesWrapper = ({ services }) => {
    return (
        <div className={styles.servicesWrapper}>
            <div className={styles.services}>
                {services.map((element) => {
                    const service = element.service;
                    return (
                        <div key={service} className={styles.service}>
                            {service}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServicesWrapper;
