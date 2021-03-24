import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
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
        button,
    } = section;
    const ref = useRef(false);
    useEffect(() => {
        if (ref.current) {
            ref.current.style = `--backgroundColor: ${button.backgroundColor}; --textColor: ${button.textColor}`;
        }
    }, [ref]);
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
                    <div className={styles.buttonContainer}>
                        <Link className={styles.button} to="/solutions">
                            <button type="button" ref={ref}>
                                <h3>{button.title}</h3>
                            </button>
                        </Link>
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
    }).isRequired,
};

export default Services;
