import React from "react";
import TitledCopy from "../TitledCopy";
import ReactMarkdown from "react-markdown";
import styles from "./DescriptiveSection.module.css";

const DescriptiveSection = ({ section }) => {
    const { title, copy, items } = section;
    return (
        <section className="section">
            <div className={styles.container}>
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
                        <TitledCopy
                            title={item.title}
                            copy={
                                <div className={styles.pContainer}>
                                    <ReactMarkdown>{item.copy}</ReactMarkdown>
                                </div>
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DescriptiveSection;
