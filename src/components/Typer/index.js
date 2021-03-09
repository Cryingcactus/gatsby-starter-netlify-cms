import React from "react";
import PropTypes from "prop-types";
import styles from "./Typer.module.css";
import TitledCopy from "../TitledCopy";
import ReactMarkdown from "react-markdown";
import Letters from "./Letters";

const Typer = ({ section }) => {
    const { backgroundColor, textColor, title, typedWords, copy } = section;
    return (
        <section className="section">
            <div
                className={styles.container}
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                }}
            >
                <TitledCopy titleSize="5.75em">
                    <span className={styles.title}>
                        {title}{" "}
                        <span className={styles.lettersContainer}>
                            <Letters typedWords={typedWords} />.
                        </span>
                    </span>
                    <ReactMarkdown>{copy}</ReactMarkdown>
                </TitledCopy>
            </div>
        </section>
    );
};

Typer.propTypes = {
    section: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        title: PropTypes.string,
        typedWords: PropTypes.array,
        copy: PropTypes.string,
    }),
};

export default Typer;
