import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styles from "./Typer.module.css";
import TitledCopy from "../TitledCopy";
import Letters from "./Letters";

const Typer = ({ section }) => {
    const { backgroundColor, textColor, title, typedWords, copy } = section;
    return (
        <section className="section">
            <div
                className={styles.container}
                style={{
                    backgroundColor,
                    color: textColor,
                }}
            >
                <TitledCopy
                    title={
                        <span className={styles.title}>
                            {title}{" "}
                            <span className={styles.lettersContainer}>
                                <Letters typedWords={typedWords} />
                            </span>
                        </span>
                    }
                    copy={<ReactMarkdown>{copy}</ReactMarkdown>}
                />
            </div>
        </section>
    );
};

Typer.propTypes = {
    section: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        title: PropTypes.string,
        typedWords: PropTypes.arrayOf({
            word: PropTypes.string,
        }),
        copy: PropTypes.string,
    }).isRequired,
};

export default Typer;
