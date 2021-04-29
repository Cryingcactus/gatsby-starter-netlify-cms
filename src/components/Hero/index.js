import React from "react";
import styles from "./Hero.module.css";
import Background from "../Background";
import HighlightedText from "./HighlightedText";

const Hero = ({ section }) => {
    const { titleOptions, backgroundImage } = section;
    const { title, highlightTitle, textColor, highlightColor } = titleOptions;
    const { image } = backgroundImage;

    return (
        <section className="section">
            <Background image={image} styles={`${styles.container}`} parallax>
                <div className={styles.titleContainer}>
                    <h1
                        className={styles.title}
                        style={{
                            color: textColor,
                        }}
                    >
                        <div className={styles.nonHighlighted}>{title}</div>
                        <HighlightedText
                            highlightTitle={highlightTitle}
                            highlightColor={highlightColor}
                        />
                    </h1>
                </div>
            </Background>
        </section>
    );
};

export default Hero;
