import React from "react";
import styles from "./MeetMeSection.module.css";
import ReactMarkdown from "react-markdown";
import TitledCopy from "../TitledCopy";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const MeetMeSection = ({ section }) => {
    const {
        title,
        copy,
        picture,
        signature,
        primaryColor,
        secondaryColor,
    } = section;
    return (
        <section className="nonPaddingSection">
            <div
                className={styles.container}
                style={{ backgroundColor: secondaryColor, color: primaryColor }}
            >
                <div className={styles.leftCol}>
                    <TitledCopy
                        title={title}
                        copy={<ReactMarkdown>{copy}</ReactMarkdown>}
                    />
                    <div className={styles.rightAligned}>
                        <PreviewCompatibleImage
                            imageInfo={signature}
                            style={{ height: "104px", width: "245px" }}
                        />
                        <div
                            className={[styles.signatureContainer, "p3"].join(
                                " "
                            )}
                        >
                            <ReactMarkdown>{signature.name}</ReactMarkdown>
                            <ReactMarkdown>{signature.title}</ReactMarkdown>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <PreviewCompatibleImage
                        imageInfo={picture}
                        style={{ height: "100%" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default MeetMeSection;
