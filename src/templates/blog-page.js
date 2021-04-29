import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import PostsPagination from "../components/PostsPagination";

export const BlogPageTemplate = ({ sections, posts }) => {
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

BlogPageTemplate.propTypes = {
    sections: PropTypes.objectOf({
        heroSection: PropTypes.object,
    }).isRequired,
    posts: PropTypes.shape({}).isRequired,
};

const BlogPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <BlogPageTemplate
                sections={frontmatter}
                posts={data.allMarkdownRemark.edges}
            />
        </Layout>
    );
};

BlogPage.propTypes = {
    data: PropTypes.objectOf({
        markdownRemark: PropTypes.objectOf({
            frontmatter: PropTypes.objectOf({
                heroSection: PropTypes.objectOf({}),
            }),
        }),
    }).isRequired,
};

export default BlogPage;

export const BlogPageQuery = graphql`
    query BlogPage($id: String!) {
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
