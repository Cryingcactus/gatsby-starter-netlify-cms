import React from "react";
import styles from "./TitleCopySection.module.css";
import ReactMarkdown from "react-markdown";

const TitleCopySection = ({ section }) => {
    const { title, copy } = section;
    return (
        <section className="section">
            <div className={styles.titleContainer}>
                <h1>{title}</h1>
                <p className="p1">
                    <ReactMarkdown>{copy}</ReactMarkdown>
                </p>
            </div>
        </section>
    );
};

export default TitleCopySection;
