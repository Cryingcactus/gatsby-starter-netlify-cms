import React from "react";
import PropTypes from "prop-types";
import styles from "./IconsSection.module.css";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const IconsSection = ({ section }) => {
    const {
        backgroundColor,
        textColor,
        title,
        copy,
        image,
        services,
        button,
    } = section;
    return (
        <section className={styles.iconsSection}>
            <div
                className={styles.container}
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                }}
            >
                <div className={styles.iconsContentContainer}>
                    <div className={styles.iconsContent}>
                        <h2>{title}</h2>
                        <h3>{copy}</h3>
                    </div>
                    <div className={styles.iconsContainer}>
                        {services.map((iconGroup) => {
                            console.log(iconGroup);
                            return (
                                <div className={styles.iconsGrounp}>
                                    <div className={styles.iconContainer}>
                                        <PreviewCompatibleImage
                                            imageInfo={
                                                iconGroup.iconContainer.icon
                                            }
                                            style={{
                                                width: "150px",
                                                height: "150px",
                                            }}
                                        />
                                        <span className={styles.iconText}>
                                            {iconGroup.iconContainer.text}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
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
