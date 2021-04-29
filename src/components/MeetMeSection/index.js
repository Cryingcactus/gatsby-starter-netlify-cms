import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styles from "./MeetMeSection.module.css";
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
                    <div className={styles.paddingContainer}>
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
                                className={[
                                    styles.signatureContainer,
                                    "p3",
                                ].join(" ")}
                            >
                                <ReactMarkdown>{signature.name}</ReactMarkdown>
                                <ReactMarkdown>{signature.title}</ReactMarkdown>
                            </div>
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

MeetMeSection.propTypes = {
    section: PropTypes.objectOf({
        title: PropTypes.string,
        copy: PropTypes.string,
        picture: PropTypes.objectOf({}),
        signature: PropTypes.objectOf({
            name: PropTypes.string,
            title: PropTypes.string,
        }),
        primaryColor: PropTypes.string,
        secondaryColor: PropTypes.string,
    }).isRequired,
};

export default MeetMeSection;
