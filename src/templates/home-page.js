import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../styles/home.module.css";
import Hero from "../components/Hero";

export const HomePageTemplate = ({
    title,
    titleOptions,
    backgroundImage,
    typingSection,
}) => {
    const [activeWord, setActiveWord] = useState(0);
    const [typedIndex, setTypedIndex] = useState(0);
    const notTimeout = useRef(true);

    useEffect(() => {
        const curentWord = typingSection.typedWords[activeWord].word;
        if (notTimeout.current) {
            notTimeout.current = false;
            setTimeout(() => {
                if (typedIndex + 1 <= curentWord.length) {
                    notTimeout.current = true;
                    setTypedIndex(typedIndex + 1);
                } else {
                    setTimeout(() => {
                        notTimeout.current = true;
                        setActiveWord(
                            activeWord + 1 <=
                                typingSection.typedWords.length - 1
                                ? activeWord + 1
                                : 0
                        );
                        setTypedIndex(0);
                    }, 5000);
                }
            }, 100);
        }
    }, [typedIndex]);

    const Underlines = () => {
        let underlines = [];
        for (let i = 0; i < 10; i++) {
            underlines.push(
                <span key={i} className={styles.underlineLetterContainer}>
                    <span
                        className={`${styles.letter} ${
                            typedIndex === i ? styles.typeWriter : ""
                        }`}
                    >
                        {typingSection.typedWords && typedIndex >= i
                            ? typingSection.typedWords[activeWord].word.charAt(
                                  i
                              )
                            : " "}
                    </span>
                    <span className={styles.underline} />
                </span>
            );
        }
        return underlines;
    };

    return (
        <div>
            <Hero
                title={title}
                titleOptions={titleOptions}
                backgroundImage={backgroundImage}
            />
            <section className={styles.typer}>
                <div
                    className={`full-width-image-container ${styles.container}`}
                    style={{
                        backgroundColor: typingSection.backgroundColor,
                        color: typingSection.textColor,
                    }}
                >
                    <div className={styles.titleContainer}>
                        <h2>
                            <span className={styles.title}>
                                {typingSection.title}
                            </span>
                            <span className={styles.underlineContainer}>
                                <Underlines />.
                            </span>
                        </h2>
                        <h3>{typingSection.copy}</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

HomePageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
};

const HomePage = ({ data }) => {
    const { markdownRemark: post } = data;
    return (
        <Layout>
            <HomePageTemplate
                title={post.frontmatter.titleOptions.title}
                titleOptions={post.frontmatter.titleOptions}
                backgroundImage={post.frontmatter.backgroundImage}
                typingSection={post.frontmatter.typingSection}
            />
        </Layout>
    );
};

HomePage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default HomePage;

export const HomePageQuery = graphql`
    query HomePage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                titleOptions {
                    title
                    titleColor
                    titleHighlightColor
                }
                backgroundImage {
                    alt
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                typingSection {
                    title
                    copy
                    backgroundColor
                    textColor
                    typedWords {
                        word
                    }
                }
            }
        }
    }
`;
