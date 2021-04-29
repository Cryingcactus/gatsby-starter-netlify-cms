import React from "react";
import PropTypes from "prop-types";
import styles from "./IconsSection.module.css";
import TitledCopy from "../TitledCopy";
import Icon from "./Icon";

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
                                    <div
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            fill: textColor,
                                        }}
                                    >
                                        <Icon
                                            url={
                                                iconsObject.icon.publicURL ??
                                                iconsObject.icon
                                            }
                                            alt={iconsObject.icon.text}
                                        />
                                    </div>

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
