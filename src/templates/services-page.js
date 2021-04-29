import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/Hero/HeroNormalImage";
import KeywordSection from "../components/KeywordSection";
import TitleCopySection from "../components/TitleCopySection";
import DescriptiveSection from "../components/DescriptiveSection";

export const ServicesPageTemplate = ({ sections }) => {
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

ServicesPageTemplate.propTypes = {
    sections: PropTypes.objectOf({
        heroSection: PropTypes.objectOf({}),
        keywordSection: PropTypes.objectOf({}),
        titleCopySection: PropTypes.objectOf({}),
        descriptiveSection: PropTypes.objectOf({}),
        titleSection: PropTypes.objectOf({}),
    }).isRequired,
};

const ServicesPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <ServicesPageTemplate sections={frontmatter} />
        </Layout>
    );
};

ServicesPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.objectOf({
            frontmatter: PropTypes.objectOf({}),
        }),
    }).isRequired,
};

export default ServicesPage;

export const ServicesPageQuery = graphql`
    query ServicesPage($id: String!) {
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
