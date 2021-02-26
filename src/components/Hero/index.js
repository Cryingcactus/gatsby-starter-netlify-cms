import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ title, titleOptions, backgroundImage }) => {
    let words = title.split(" ");
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
        <section className={styles.hero}>
            <div
                className={`full-width-image-container ${styles.container}`}
                style={{
                    backgroundImage: `url(${backgroundImage.image.childImageSharp.fluid.src})`,
                }}
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
            </div>
        </section>
    );
};

export default Hero;
