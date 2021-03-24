import React from "react";
import PropTypes from "prop-types";
import styles from "./IconsSection.module.css";
import TitledCopy from "../TitledCopy";

const IconsSection = ({ section }) => {
    const { backgroundColor, textColor, title, copy, icons } = section;
    return (
        <section className="section">
            <div
                className={styles.container}
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                }}
            >
                <div className={styles.iconsContentContainer}>
                    <TitledCopy title={title} copy={copy} />
                    <div className={styles.iconsContainer}>
                        {icons.map((iconsObject, i) => (
                            <div
                                key={iconsObject.text + i}
                                className={styles.iconsGrounp}
                            >
                                <div className={styles.iconContainer}>
                                    <img
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            fill: textColor,
                                        }}
                                        src={iconsObject.icon.publicURL}
                                        alt={iconsObject.icon.text}
                                    />
                                    <span
                                        className={[styles.iconText, "p1"].join(
                                            " ",
                                        )}
                                    >
                                        {iconsObject.text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

IconsSection.propTypes = {
    section: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.array,
    }),
};

export default IconsSection;
