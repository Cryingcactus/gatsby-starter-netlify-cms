import React from "react";
import styles from "./TitleCopySection.module.css";
import ReactMarkdown from "react-markdown";

const TitleCopySection = ({ section, alignment, invserse }) => {
    const { title, copy } = section;
    let style;
    if (invserse) {
        style = { ...style, flexDirection: "column-reverse" };
    }
    if (alignment) {
        style = { ...style, textAlign: alignment };
    }
    return (
        <section className="section">
            <div className={styles.titleContainer} style={style}>
                <h1>{title}</h1>
                <p className="p1">
                    <ReactMarkdown>{copy}</ReactMarkdown>
                </p>
            </div>
        </section>
    );
};

export default TitleCopySection;
