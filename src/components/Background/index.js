import React from "react";
import BackgroundImage from "gatsby-background-image";

const Background = ({ image, styles, children }) => {
    if (typeof image === "string") {
        return (
            <div
                className={styles}
                style={{
                    backgroundImage: `url(${
                        !!image.childImageSharp
                            ? image.childImageSharp.fluid.src
                            : image
                    })`,
                }}
            >
                {children}
            </div>
        );
    } else {
        return (
            <BackgroundImage
                Tag="section"
                className={styles}
                fluid={
                    image.childImageSharp
                        ? image.childImageSharp.fluid
                        : undefined
                }
            >
                {children}
            </BackgroundImage>
        );
    }
};

export default Background;
