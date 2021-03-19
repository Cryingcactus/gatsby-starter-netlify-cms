import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styles from "./LegalPage.module.css";

const LegalPage = ({ section }) => {
    const { legalPage } = section;
    return (
        <section className="section">
            <div className={styles.container}>
                <div className={styles.copyContainer}>
                    <div className="p4">
                        <ReactMarkdown>{legalPage}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </section>
    );
};

LegalPage.propTypes = {
    section: PropTypes.shape({
        legalPage: PropTypes.string,
    }).isRequired,
};

export default LegalPage;
