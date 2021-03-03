import React from "react";
import styles from "./Hero.module.css";

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
        <section className={styles.hero}>
            <div
                className={`full-width-image-container ${styles.container}`}
                style={{
                    backgroundImage: `url(${
                        !!image.childImageSharp
                            ? image.childImageSharp.fluid.src
                            : image
                    })`,
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
