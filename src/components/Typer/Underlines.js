import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Underline from "./Underline";

const Underlines = ({ typedWords, textColor }) => {
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
                    }, 5000);
                }
            }, 100);
        }
    }, [letterIndex]);

    let underlines = [];
    for (let i = 0; i < 13; i++) {
        const currentChar = letterIndex >= i ? curentWord.charAt(i) : " ";
        underlines.push(
            <Underline key={i} char={currentChar} textColor={textColor} />
        );
    }
    return underlines;
};

Underlines.propTypes = {
    typedWords: PropTypes.arrayOf(PropTypes.shape({ word: PropTypes.string }))
        .isRequired,
    textColor: PropTypes.string,
};

export default Underlines;
