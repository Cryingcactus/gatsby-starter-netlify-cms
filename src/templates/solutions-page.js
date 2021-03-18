import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/Hero/HeroNormalImage";
import KeywordSection from "../components/KeywordSection";
import TitleCopySection from "../components/TitleCopySection";
import DescriptiveSection from "../components/DescriptiveSection";

export const SolutionsPageTemplate = ({ sections }) => {
    const {
        heroSection,
        keywordSection,
        titleCopySection,
        descriptiveSection,
        titleSection,
    } = sections;
    return (
        <div style={{ position: "relative" }}>
            <div className="paralax-normal">
                <HeroSection section={heroSection} />
                <KeywordSection section={keywordSection} />
                <TitleCopySection section={titleCopySection} />
                <DescriptiveSection section={descriptiveSection} />
                <TitleCopySection section={titleSection} />
            </div>
        </div>
    );
};

SolutionsPageTemplate.propTypes = {
    sections: PropTypes.object.isRequired,
};

const SolutionsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <SolutionsPageTemplate sections={frontmatter} />
        </Layout>
    );
};

SolutionsPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default SolutionsPage;

export const SolutionsPageQuery = graphql`
    query SolutionsPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            rawMarkdownBody
            frontmatter {
                heroSection {
                    titleOptions {
                        title
                        highlightTitle
                        textColor
                        highlightColor
                    }
                    backgroundImage {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 920, quality: 90) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                keywordSection {
                    keywords {
                        phrase
                        keyword
                        active {
                            copy
                            values {
                                value
                            }
                        }
                    }
                    primaryColor
                    secondaryColor
                }
                titleCopySection {
                    title
                    copy
                }
                descriptiveSection {
                    title
                    copy
                    items {
                        title
                        copy
                    }
                    primaryColor
                    secondaryColor
                }
                titleSection {
                    title
                }
            }
        }
    }
`;
