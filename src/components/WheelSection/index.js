import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./WheelSection.module.css";
import TitledCopy from "../TitledCopy";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const WheelSection = ({ section }) => {
    const [currentCarouselSection, setCurrentCarouselSection] = useState(0);
    const [mouseOn, setMouseOn] = useState(false);
    const rotating = useRef(false);
    const previousIndexRef = useRef();
    let previousIndex = previousIndexRef.current;
    useEffect(() => {
        previousIndexRef.current = currentCarouselSection;
    });

    const {
        backgroundColor,
        textColor,
        title,
        copy,
        image,
        carousel,
        carouselColor,
    } = section;
    const carouselItems = carousel.map((item, i) => (
        <div
            key={i}
            className={[
                styles.carouselItems,
                previousIndex > currentCarouselSection
                    ? styles.fadeRight
                    : styles.fadeLeft,
            ].join(" ")}
        >
            <div className={styles.carouselTitle}>{item.title}</div>
            <div className={styles.carouselContent}>{item.copy}</div>
        </div>
    ));
    return (
        <section>
            <div
                className={styles.container}
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                }}
            >
                <div className="screen-padding">
                    <TitledCopy title={title} copy={copy} />
                </div>

                <div className={styles.wheelContainer}>
                    <div
                        onKeyPress={() => {}}
                        tabIndex={0}
                        aria-label="Next Item"
                        role="button"
                        className={styles.wheelScrollArea}
                        onMouseOver={() => {
                            setMouseOn(true);
                        }}
                        onFocus={() => {
                            setMouseOn(true);
                        }}
                        onMouseOut={() => {
                            setMouseOn(false);
                        }}
                        onBlur={() => {
                            setMouseOn(false);
                        }}
                        onClick={() => {
                            if (mouseOn && !rotating.current) {
                                rotating.current = true;
                                setCurrentCarouselSection(
                                    currentCarouselSection + 1,
                                );
                                setTimeout(() => {
                                    rotating.current = false;
                                }, 300);
                            }
                        }}
                    />
                    <div className={styles.wheel}>
                        <PreviewCompatibleImage
                            imageInfo={image}
                            style={{
                                transform: `translate(-45%, 45%) rotate(${
                                    (360 / carousel.length) *
                                    currentCarouselSection
                                }deg)`,
                                transition: "all 0.3s ease",
                                overflow: "unset",
                            }}
                        />
                    </div>

                    <div className={styles.space} />
                    <div
                        className={styles.carouselContainer}
                        style={{ color: carouselColor }}
                    >
                        {
                            carouselItems[
                                currentCarouselSection % carousel.length
                            ]
                        }

                        <div className={styles.arrowContainer}>
                            <div
                                className={styles.arrowButton}
                                tabIndex={0}
                                aria-label="Previous Item"
                                role="button"
                                onKeyPress={() => {}}
                                onClick={() => {
                                    setCurrentCarouselSection(
                                        currentCarouselSection - 1 >= 0
                                            ? currentCarouselSection - 1
                                            : carousel.length - 1,
                                    );
                                }}
                            >
                                <span
                                    className={[styles.arrow, styles.prev].join(
                                        " ",
                                    )}
                                    style={{ backgroundColor: carouselColor }}
                                />
                            </div>
                            <div
                                className={styles.arrowButton}
                                tabIndex={0}
                                aria-label="Next Item"
                                role="button"
                                onKeyPress={() => {}}
                                onClick={() => {
                                    setCurrentCarouselSection(
                                        currentCarouselSection + 1,
                                    );
                                }}
                            >
                                <span
                                    className={[styles.arrow, styles.next].join(
                                        " ",
                                    )}
                                    style={{ backgroundColor: carouselColor }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

WheelSection.propTypes = {
    section: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
};

export default WheelSection;
