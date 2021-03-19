import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import TermsOfUse from "../components/TermsOfUse";

export const TermsOfUsePageTemplate = ({ sections }) => (
    <div style={{ position: "relative" }}>
        <div className="paralax-normal">
            <TermsOfUse section={sections} />
        </div>
    </div>
);

TermsOfUsePageTemplate.propTypes = {
    sections: PropTypes.shape({
        termsOfUse: PropTypes.string,
    }).isRequired,
};

const TermsOfUsePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <TermsOfUsePageTemplate sections={frontmatter} />
        </Layout>
    );
};

TermsOfUsePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({}),
        }),
    }).isRequired,
};

export default TermsOfUsePage;

export const TermsOfUsePageQuery = graphql`
    query TermsOfUsePage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            rawMarkdownBody
            frontmatter {
                termsOfUse
            }
        }
    }
`;
