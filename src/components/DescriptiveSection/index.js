import React from "react";
import TitledCopy from "../TitledCopy";
import ReactMarkdown from "react-markdown";
import styles from "./DescriptiveSection.module.css";

const DescriptiveSection = ({ section }) => {
    const { title, copy, items, primaryColor, secondaryColor } = section;
    return (
        <section className="section">
            <div
                className={styles.container}
                style={{ backgroundColor: secondaryColor, color: primaryColor }}
            >
                <div className={styles.titleContainer}>
                    <TitledCopy
                        title={title}
                        copy={
                            <div className={styles.pContainer}>
                                <ReactMarkdown>{copy}</ReactMarkdown>
                            </div>
                        }
                    />
                </div>
                <div className={styles.itemsContainer}>
                    {items.map((item) => (
                        <TitledCopy>
                            <h3>{item.title}</h3>
                            <div
                                className={[styles.pContainer, "p3"].join(" ")}
                            >
                                <ReactMarkdown>{item.copy}</ReactMarkdown>
                            </div>
                        </TitledCopy>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DescriptiveSection;
