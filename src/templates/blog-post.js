import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Content, { HTMLContent } from "../components/Content";
import styles from "../styles/Blog.module.css";

export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
    heroSection,
}) => {
    const PostContent = contentComponent || Content;

    return (
        <div style={{ position: "relative" }}>
            <div className="paralax-normal">
                <section className="section">
                    {helmet || ""}
                    {heroSection ? <Hero section={heroSection} /> : ""}
                    <div className={styles.container}>
                        <div>
                            <div>
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <PostContent content={content} />
                                {tags && tags.length ? (
                                    <div style={{ marginTop: `4rem` }}>
                                        <h4>Tags</h4>
                                        <ul className="taglist">
                                            {tags.map((tag) => (
                                                <li key={tag + `tag`}>
                                                    <Link
                                                        to={`/tags/${kebabCase(
                                                            tag,
                                                        )}/`}
                                                    >
                                                        {tag}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

BlogPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                heroSection={post.frontmatter.heroSection}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
            />
        </Layout>
    );
};

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
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
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
            }
        }
    }
`;
