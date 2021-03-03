import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Typer from "../components/Typer";

export const HomePageTemplate = ({
    title,
    titleOptions,
    image,
    typingSection,
}) => {
    return (
        <div>
            <Hero title={title} titleOptions={titleOptions} image={image} />
            <Typer typingSection={typingSection} />
        </div>
    );
};

HomePageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const HomePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <HomePageTemplate
                title={frontmatter.titleOptions.title}
                titleOptions={frontmatter.titleOptions}
                image={frontmatter.backgroundImage.image}
                typingSection={frontmatter.typingSection}
            />
        </Layout>
    );
};

HomePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default HomePage;

export const HomePageQuery = graphql`
    query HomePage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            rawMarkdownBody
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
