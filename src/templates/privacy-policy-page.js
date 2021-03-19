import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import LegalPage from "../components/LegalPage";

export const PrivacyPolicyPageTemplate = ({ sections }) => (
    <div style={{ position: "relative" }}>
        <div className="paralax-normal">
            <LegalPage section={sections} />
        </div>
    </div>
);

PrivacyPolicyPageTemplate.propTypes = {
    sections: PropTypes.shape({
        legalPage: PropTypes.string,
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
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({}),
        }),
    }).isRequired,
};

export default PrivacyPolicyPage;

export const PrivacyPolicyPageQuery = graphql`
    query PrivacyPolicyPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            rawMarkdownBody
            frontmatter {
                legalPage
            }
        }
    }
`;
