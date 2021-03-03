import React from "react";
import PropTypes from "prop-types";
import styles from "./Services.module.css";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import ServicesWrapper from "./ServicesWrapper";

const Services = ({ section }) => {
    const {
        backgroundColor,
        textColor,
        title,
        image,
        services,
        button,
    } = section;
    return (
        <section className={styles.servicesSection}>
            <div
                className={styles.container}
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                }}
            >
                <div className={styles.servicesContentContainer}>
                    <div className={styles.servicesContent}>
                        <h2>{title}</h2>
                        <ServicesWrapper services={services} />
                        <div className={styles.ctaContainer}>
                            <button
                                className={styles.cta}
                                style={{
                                    backgroundColor: button.backgroundColor,
                                    color: button.textColor,
                                }}
                            >
                                {button.title}
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.imageContainer}
                    style={{
                        backgroundImage: `url(${
                            !!image.childImageSharp
                                ? image.childImageSharp.fluid.src
                                : image
                        })`,
                    }}
                ></div>
            </div>
        </section>
    );
};

Services.propTypes = {
    section: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.array,
    }),
};

export default Services;
