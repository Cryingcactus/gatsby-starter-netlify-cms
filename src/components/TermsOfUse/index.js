import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styles from "./TermsOfUse.module.css";

const TermsOfUse = ({ section }) => {
    const { termsOfUse } = section;
    return (
        <section className="section">
            <div className={styles.container}>
                <div className={styles.copyContainer}>
                    <div className="p4">
                        <ReactMarkdown>{termsOfUse}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </section>
    );
};

TermsOfUse.propTypes = {
    section: PropTypes.shape({
        termsOfUse: PropTypes.string,
    }).isRequired,
};

export default TermsOfUse;
