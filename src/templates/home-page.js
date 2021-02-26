import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../styles/home.module.css";

export const HomePageTemplate = ({ title, backgroundImage }) => {
    return (
        <section className={styles.hero}>
            <div
                className="full-width-image-container"
                style={{
                    backgroundImage: `url(${backgroundImage.image.childImageSharp.fluid.src})`,
                }}
            >
                <div className="columns">
                    <h1 className="title">{title}</h1>
                </div>
            </div>
        </section>
    );
};

HomePageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
};

const HomePage = ({ data }) => {
    const { markdownRemark: post } = data;
    return (
        <Layout>
            <HomePageTemplate
                title={post.frontmatter.title}
                backgroundImage={post.frontmatter.backgroundImage}
            />
        </Layout>
    );
};

HomePage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default HomePage;

export const HomePageQuery = graphql`
    query HomePage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                swim
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
            }
        }
    }
`;
