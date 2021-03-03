import React from "react";
import PropTypes from "prop-types";
import styles from "./Typer.module.css";

const Underlines = ({ char, textColor }) => {
    return (
        <span className={styles.underlineLetterContainer}>
            <span className={styles.letter}>{char}</span>
            <span
                className={styles.underline}
                style={textColor ? { backgroundColor: textColor } : {}}
            />
        </span>
    );
};

Underlines.propTypes = {
    char: PropTypes.string.isRequired,
    textColor: PropTypes.string,
};

export default Underlines;
