import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/Hero";
import TitleCopySection from "../components/TitleCopySection";
import DescriptiveSection from "../components/DescriptiveSection";
import MeetMeSection from "../components/MeetMeSection";

export const ValuesPageTemplate = ({ sections }) => {
    const {
        heroSection,
        copyTitleSection,
        descriptiveSection,
        titleCopySection,
        meetMe,
        titleSection,
    } = sections;
    return (
        <div style={{ position: "relative" }}>
            <div className="paralax-normal">
                <HeroSection section={heroSection} />
                <TitleCopySection section={copyTitleSection} invserse />
                <DescriptiveSection section={descriptiveSection} />
                <TitleCopySection
                    section={titleCopySection}
                    alignment={"start"}
                />
                <MeetMeSection section={meetMe} />
                <TitleCopySection section={titleSection} />
            </div>
        </div>
    );
};

ValuesPageTemplate.propTypes = {
    sections: PropTypes.object.isRequired,
};

const ValuesPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <ValuesPageTemplate sections={frontmatter} />
        </Layout>
    );
};

ValuesPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default ValuesPage;

export const ValuesPageQuery = graphql`
    query ValuesPage($id: String!) {
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
                                fluid(maxWidth: 920, quality: 90) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                copyTitleSection {
                    title
                    copy
                }
                descriptiveSection {
                    title
                    items {
                        title
                        copy
                    }
                    primaryColor
                    secondaryColor
                }
                titleCopySection {
                    title
                    copy
                }
                meetMe {
                    title
                    copy
                    picture {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 920, quality: 90) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    signature {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 920, quality: 90) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        nameTitle
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
