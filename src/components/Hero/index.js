import React from "react";
import styles from "./Hero.module.css";
import Background from "../Background";
const Hero = ({ section }) => {
    const { titleOptions, backgroundImage } = section;
    const { title, highlightTitle, textColor, highlightColor } = titleOptions;
    const { image } = backgroundImage;
    let highlightedWords = highlightTitle.split(" ");
    let highlightedTitle = highlightedWords.map((word, i) => {
        return (
            <span
                key={i}
                style={{
                    backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
                }}
            >
                {word}{" "}
            </span>
        );
    });
    return (
        <section className="section">
            <Background
                image={image}
                styles={`full-width-image-container ${styles.container}`}
                parallax
            >
                <div className={styles.titleContainer}>
                    <h1
                        className={styles.title}
                        style={{
                            color: textColor,
                        }}
                    >
                        <span>{title}</span>
                        <span>{highlightedTitle}</span>
                    </h1>
                </div>
            </Background>
        </section>
    );
};

export default Hero;
