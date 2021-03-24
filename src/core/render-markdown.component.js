import { MDXProvider } from "@mdx-js/react";
import React from "react";
import PropTypes from "prop-types";

import { CatchError } from "./catch-error.component";
// import { CMS_SHORTCODES } from "../cms";

/* Use this component to parse markdown using MDX. See MDX runtime for details.
 * The map provided to the components prop instructs MDX on how to render your HTML and
 * custom React components.
 *
 * @md: string - Markdown to be parsed
 */

import TitleCopySection from "../components/TitleCopySection";

const CMS_SHORTCODES = {
    QuoteSection: (props) => <TitleCopySection {...props} />,
};

export const RenderMarkdown = ({ md }) => (
    <CatchError>
        <MDXProvider components={{ ...CMS_SHORTCODES }}>{md}</MDXProvider>
    </CatchError>
);

RenderMarkdown.defaultProps = {
    md: "",
};

RenderMarkdown.propTypes = {
    md: PropTypes.string.isRequired,
};
