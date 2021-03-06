import React from "react";
import PropTypes from "prop-types";
import styles from "./TitledCopy.module.css";
import Title from "../Title";
import Copy from "../Copy";

const TitledCopy = ({ title, titleSize, copy, copySize, children }) => (
    <div className={styles.container}>
        <Title title={title} size={titleSize}>
            {children && children[0] ? children[0] : undefined}
        </Title>
        <Copy copy={copy} size={copySize}>
            {children && children[1] ? children[1] : undefined}
        </Copy>
    </div>
);

TitledCopy.propTypes = {
    title: PropTypes.string,
    titleSize: PropTypes.string,
    copy: PropTypes.string,
    copySize: PropTypes.string,
};

export default TitledCopy;
