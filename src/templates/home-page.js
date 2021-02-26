import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const HomePageTemplate = (props) => {
    // console.log(props);
    // <PreviewCompatibleImage imageInfo={heroImage} />;
    return (
        <section className="hero">
            <div className="container">
                <div className="columns">
                    <h1 className="title">{props.title}</h1>
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
    console.log(post);
    return (
        <Layout>
            <HomePageTemplate
                title={post.frontmatter.title}
                heroImage={post.frontmatter.heroImage}
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
