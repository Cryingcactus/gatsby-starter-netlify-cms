/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Typer from "../components/Typer";
import Services from "../components/Services";
import IconsSection from "../components/IconsSection";
import WheelSection from "../components/WheelSection";
import RelatedPosts from "../components/RelatedPosts";

export const IndexPageTemplate = ({ sections, posts }) => {
    const {
        heroSection,
        typingSection,
        wheelSection,
        servicesSection,
        iconsSection,
    } = sections;
    return (
        <div style={{ position: "relative" }}>
            <div className="paralax-normal">
                <Hero section={heroSection} />
                <Typer section={typingSection} />
                <WheelSection section={wheelSection} />
                <Services section={servicesSection} />
                <IconsSection section={iconsSection} />
                <RelatedPosts posts={posts} readMore />
            </div>
        </div>
    );
};

IndexPageTemplate.propTypes = {
    sections: PropTypes.objectOf({
        heroSection: PropTypes.object,
        typingSection: PropTypes.object,
        wheelSection: PropTypes.object,
        servicesSection: PropTypes.object,
        iconsSection: PropTypes.object,
        blogSection: PropTypes.object,
    }).isRequired,
};

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <IndexPageTemplate
                sections={frontmatter}
                posts={data.allMarkdownRemark.edges}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
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

export default IndexPage;

export const IndexPageQuery = graphql`
    query IndexPage($id: String!) {
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
                typingSection {
                    title
                    copy
                    backgroundColor
                    textColor
                    typedWords {
                        word
                    }
                }
                wheelSection {
                    title
                    copy
                    backgroundColor
                    textColor
                    carouselColor
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 90) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    carousel {
                        title
                        copy
                    }
                }
                servicesSection {
                    services {
                        service
                    }
                    title
                    button {
                        title
                        backgroundColor
                        textColorHover
                        textColor
                        backgroundColorHover
                    }
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 90) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    backgroundColor
                    textColor
                }
                iconsSection {
                    backgroundColor
                    textColor
                    title
                    copy
                    icons {
                        icon {
                            publicURL
                        }
                        text
                    }
                }
                blogSection {
                    title
                    numberOfPosts
                    button {
                        title
                        backgroundColor
                        textColorHover
                        textColor
                        backgroundColorHover
                    }
                }
            }
        }
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(blog)/" } }
            sort: { order: DESC, fields: frontmatter___date }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 200)
                    id
                    frontmatter {
                        title
                        description
                        date(formatString: "MMMM DD, YYYY")
                        tags
                        featuredpost
                        featuredimage {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 90) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    timeToRead
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
