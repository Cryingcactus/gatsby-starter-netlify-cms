import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Typer.module.css";

const Letters = ({ typedWords }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const notTimeout = useRef(true);
    const curentWord = typedWords[wordIndex].word;

    useEffect(() => {
        if (notTimeout.current) {
            notTimeout.current = false;
            setTimeout(() => {
                if (letterIndex + 1 <= curentWord.length) {
                    notTimeout.current = true;
                    setLetterIndex(letterIndex + 1);
                } else {
                    setTimeout(() => {
                        notTimeout.current = true;
                        setWordIndex(
                            wordIndex + 1 <= typedWords.length - 1
                                ? wordIndex + 1
                                : 0
                        );
                        setLetterIndex(0);
                    }, 2000);
                }
            }, 50);
        }
    }, [letterIndex]);

    let letters = [];
    for (let i = 0; i < curentWord.length; i++) {
        const currentChar = letterIndex >= i ? curentWord.charAt(i) : " ";
        letters.push(
            <span key={i + currentChar} className={styles.letter}>
                {currentChar}
            </span>
        );
    }
    return letters;
};

Letters.propTypes = {
    typedWords: PropTypes.arrayOf(PropTypes.shape({ word: PropTypes.string }))
        .isRequired,
};

export default Letters;
