import React from "react";
import PropTypes from "prop-types";
import styles from "./Services.module.css";
import ServicesWrapper from "./ServicesWrapper";
import Background from "../Background";

const Services = ({ section }) => {
    const {
        backgroundColor,
        textColor,
        title,
        image,
        services,
        // button,
    } = section;
    return (
        <section>
            <div
                className={styles.container}
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                }}
            >
                <div
                    className={[
                        styles.servicesContentContainer,
                        "section left-padding",
                    ].join(" ")}
                >
                    <div className={styles.servicesContent}>
                        <h2>{title}</h2>
                        <ServicesWrapper services={services} />
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Background image={image} styles={styles.image} />
                </div>
            </div>
        </section>
    );
};

Services.propTypes = {
    section: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
};

export default Services;
