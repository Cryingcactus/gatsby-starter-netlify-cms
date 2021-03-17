import React from "react";
import styles from "./Hero.module.css";
import HighlightedText from "./HighlightedText";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const HeroNormalImage = ({ section }) => {
    const { titleOptions, backgroundImage } = section;
    const { title, highlightTitle, textColor, highlightColor } = titleOptions;
    const { image } = backgroundImage;

    return (
        <section className="nonPaddingSection">
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1
                        className={[
                            styles.title,
                            styles.titleAndHighlight,
                        ].join(" ")}
                        style={{
                            color: textColor,
                        }}
                    >
                        <div className={styles.nonHighlighted}>{title}</div>
                        <div className={styles.rightAligned}>
                            <HighlightedText
                                highlightTitle={highlightTitle}
                                highlightColor={highlightColor}
                            />
                        </div>
                    </h1>
                </div>
                <div className={styles.imageContainer}>
                    <PreviewCompatibleImage
                        imageInfo={image}
                        style={{ height: "100%" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroNormalImage;
