import React from "react";
import PropTypes from "prop-types";
import styles from "./Typer.module.css";
import ReactMarkdown from "react-markdown";
import Underlines from "./Underlines";

const Typer = ({ section }) => {
    const { backgroundColor, textColor, title, typedWords, copy } = section;
    return (
        <section className={styles.typer}>
            <div
                className={styles.container}
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                }}
            >
                <div className={styles.titleContainer}>
                    <h2>
                        <span className={styles.title}>{title}</span>
                        <span className={styles.underlineContainer}>
                            <Underlines
                                typedWords={typedWords}
                                textColor={textColor}
                            />
                            .
                        </span>
                    </h2>
                    <h3>
                        <ReactMarkdown>{copy}</ReactMarkdown>
                    </h3>
                </div>
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
