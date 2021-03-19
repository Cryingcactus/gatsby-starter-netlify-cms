import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

export const PrivacyPolicyPageTemplate = ({ sections }) => {
    const { privacy } = sections;
    return (
        <div style={{ position: "relative" }}>
            <div className="paralax-normal">
                <ReactMarkdown>{privacy}</ReactMarkdown>
            </div>
        </div>
    );
};

PrivacyPolicyPageTemplate.propTypes = {
    sections: PropTypes.object.shape({
        privacy: PropTypes.string,
    }).isRequired,
};

const PrivacyPolicyPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <PrivacyPolicyPageTemplate sections={frontmatter} />
        </Layout>
    );
};

PrivacyPolicyPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object.shape({
            frontmatter: PropTypes.object.shape({}),
        }),
    }).isRequired,
};

export default PrivacyPolicyPage;

export const PrivacyPolicyPageQuery = graphql`
    query PrivacyPolicyPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            rawMarkdownBody
            frontmatter {
                privacyPolicy
            }
        }
    }
`;
