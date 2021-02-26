import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        setInterval(() => {
            setActiveWord(
                activeWord + 1 <= typingSection.typedWords.length
                    ? activeWord + 1
                    : 0
            );
        }, 5000);
    }, []);

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
                            {typingSection.title}{" "}
                            <span>{typingSection.typedWords[activeWord]}</span>
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
                    typedWords
                }
            }
        }
    }
`;
