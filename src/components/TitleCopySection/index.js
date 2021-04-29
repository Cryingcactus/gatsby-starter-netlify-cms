import React from "react";
import styles from "./TitleCopySection.module.css";
import ReactMarkdown from "react-markdown";

const TitleCopySection = ({ section, alignment, invserse }) => {
    const { title, copy, textColor, backgroundColor } = section;
    let style;
    if (invserse) {
        style = {
            ...style,
            flexDirection: "column-reverse",
            paddingTop: "90px",
        };
    }
    if (alignment) {
        style = { ...style, textAlign: alignment };
    }
    style = {
        ...style,
        color: textColor,
        backgroundColor,
    };
    return (
        <section className="section">
            <div className={styles.titleContainer} style={style}>
                <h1>{title}</h1>
                <div className="p1">
                    <ReactMarkdown>{copy}</ReactMarkdown>
                </div>
            </div>
        </section>
    );
};

export default TitleCopySection;
