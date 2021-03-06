import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Typer from "../components/Typer";
import Services from "../components/Services";
import IconsSection from "../components/IconsSection";
import WheelSection from "../components/WheelSection";

export const HomePageTemplate = ({ sections }) => {
    const {
        heroSection,
        typingSection,
        wheelSection,
        servicesSection,
        iconsSection,
    } = sections;
    return (
        <div>
            <Hero section={heroSection} />
            <Typer section={typingSection} />
            <WheelSection section={wheelSection} />
            <Services section={servicesSection} />
            <IconsSection section={iconsSection} />
        </div>
    );
};

HomePageTemplate.propTypes = {
    sections: PropTypes.object.isRequired,
};

const HomePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <HomePageTemplate sections={frontmatter} />
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
                heroSection {
                    titleOptions {
                        title
                        titleColor
                        titleHighlightColor
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
                            childImageSharp {
                                fluid(maxWidth: 150, quality: 70) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
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
    }
`;
