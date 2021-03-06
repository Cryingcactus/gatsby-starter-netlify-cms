import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.css";

const TitledCopy = ({ title, size, children }) => (
    <h2 className={styles.title} style={size ? { fontSize: size } : {}}>
        {children ? children : title}
    </h2>
);

TitledCopy.propTypes = {
    title: PropTypes.string,
    size: PropTypes.string,
};

export default TitledCopy;
