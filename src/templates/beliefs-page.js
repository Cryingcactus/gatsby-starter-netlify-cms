import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import PostsPagination from "../components/PostsPagination";

export const BeliefsPageTemplate = ({ sections, posts }) => {
    const { heroSection } = sections;
    return (
        <div style={{ position: "relative" }}>
            <div className="paralax-normal">
                <Hero section={heroSection} />
                <PostsPagination posts={posts} />
            </div>
        </div>
    );
};

BeliefsPageTemplate.propTypes = {
    sections: PropTypes.objectOf({
        heroSection: PropTypes.object,
    }).isRequired,
    posts: PropTypes.shape({}).isRequired,
};

const BeliefsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <BeliefsPageTemplate
                sections={frontmatter}
                posts={data.allMarkdownRemark.edges}
            />
        </Layout>
    );
};

BeliefsPage.propTypes = {
    data: PropTypes.objectOf({
        markdownRemark: PropTypes.objectOf({
            frontmatter: PropTypes.objectOf({
                heroSection: PropTypes.objectOf({}),
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
