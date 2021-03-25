import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styles from "./KeywordSection.module.css";

const KeywordSection = ({ section }) => {
    const { keywords, primaryColor, secondaryColor } = section;
    const [active, setActive] = useState(-1);
    return (
        <section className="nonPaddingSection">
            <div className={styles.container}>
                {keywords.map((card, i) => {
                    const hide = active !== -1 ? styles.hide : "";
                    const className = active === i ? styles.active : hide;
                    return (
                        <div className={className}>
                            <Card
                                key={card.keyword}
                                cardInfo={card}
                                clicked={() => {
                                    setActive(active !== i ? i : -1);
                                }}
                                active={active}
                                primaryColor={primaryColor}
                                secondaryColor={secondaryColor}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

KeywordSection.propTypes = {
    section: PropTypes.objectOf({
        keywords: PropTypes.arrayOf({
            cardInfo: PropTypes.object,
        }),
        clicked: PropTypes.func,
        primaryColor: PropTypes.string,
        secondaryColor: PropTypes.string,
    }).isRequired,
};

export default KeywordSection;
