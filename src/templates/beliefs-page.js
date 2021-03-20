/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export const BeliefsPageTemplate = ({ sections }) => {
    const { heroSection } = sections;
    return (
        <div style={{ position: "relative" }}>
            <div className="paralax-normal">
                <Hero section={heroSection} />
            </div>
        </div>
    );
};

BeliefsPageTemplate.propTypes = {
    sections: PropTypes.objectOf({
        heroSection: PropTypes.object,
    }).isRequired,
};

const BeliefsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <BeliefsPageTemplate sections={frontmatter} />
        </Layout>
    );
};

BeliefsPage.propTypes = {
    data: PropTypes.objectOf({
        markdownRemark: PropTypes.objectOf({
            frontmatter: PropTypes.objectOf({
                heroSection: PropTypes.objectOf({}),
                typingSection: PropTypes.objectOf({}),
                wheelSection: PropTypes.objectOf({}),
                servicesSection: PropTypes.objectOf({}),
                iconsSection: PropTypes.objectOf({}),
                blogSection: PropTypes.objectOf({}),
            }),
        }),
    }).isRequired,
};

export default BeliefsPage;

export const BeliefsPageQuery = graphql`
    query BeliefsPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            rawMarkdownBody
            frontmatter {
                heroSection {
                    titleOptions {
                        highlightTitle
                        textColor
                        highlightColor
                    }
                    backgroundImage {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 90) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
