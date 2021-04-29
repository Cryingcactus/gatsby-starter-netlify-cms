import React from "react";

import IndexPage from "../templates/index-page.js";
import DefaultPage from "./default-page.template";
import BlogPost from "../templates/blog-post.js";
import { AppLayout } from "../app-layout.component";
import { safelyGetFrontMatter } from "../cms";

// Extend this template map to allow your users to choose a page layout from the CMS
// If you're only looking for how to specify a different template per content folder, see:
// https://www.gatsbyjs.org/packages/gatsby-mdx/#installation
const componentTemplateMap = {
    "index-page": IndexPage,
    "blog-page": BlogPost,
};

const CMSTemplate = (props) => {
    const { pageContext } = props;
    const { templateKey } = safelyGetFrontMatter(pageContext);
    const Page = componentTemplateMap[templateKey];
    return (
        <AppLayout>
            {Page ? <Page {...props} /> : <DefaultPage {...props} />}
        </AppLayout>
    );
};

export default CMSTemplate;
