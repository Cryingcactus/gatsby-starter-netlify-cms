import React from "react";
import PropTypes from "prop-types";
import styles from "./Copy.module.css";
const Copy = ({ copy, size, children }) => (
    <h3 className={styles.copy} style={size ? { fontSize: size } : {}}>
        {children && children ? children : copy}
    </h3>
);

Copy.propTypes = {
    copy: PropTypes.string,
    size: PropTypes.string,
};

export default Copy;
