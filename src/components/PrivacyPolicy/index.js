import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = ({ section }) => {
    const { privacyPolicy } = section;
    return (
        <section className="section">
            <div className={styles.container}>
                <div className={styles.copyContainer}>
                    <div className="p4">
                        <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </section>
    );
};

PrivacyPolicy.propTypes = {
    section: PropTypes.shape({
        privacyPolicy: PropTypes.string,
    }).isRequired,
};

export default PrivacyPolicy;
