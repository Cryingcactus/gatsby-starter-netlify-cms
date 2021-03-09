import React from "react";
import styles from "./Hero.module.css";
import Background from "../Background";
const Hero = ({ section }) => {
    const { titleOptions, backgroundImage } = section;
    const { image } = backgroundImage;
    let words = titleOptions.title.split(" ");
    let titleRend = words.map((word, i) => {
        return (
            <span
                key={i}
                style={{
                    backgroundImage: `linear-gradient(${titleOptions.titleHighlightColor}, ${titleOptions.titleHighlightColor})`,
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
            >
                <div className={styles.titleContainer}>
                    <h1
                        className={styles.title}
                        style={{
                            color: titleOptions.titleColor,
                        }}
                    >
                        {titleRend}
                    </h1>
                </div>
            </Background>
        </section>
    );
};

export default Hero;
