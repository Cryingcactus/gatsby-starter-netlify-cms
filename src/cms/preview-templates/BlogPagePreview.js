import React from "react";
import { BlogPageTemplate } from "../../templates/blog-page";

const BlogPagePreview = ({ entry, widgetFor }) => {
    return <BlogPageTemplate sections={entry.getIn(["data"]).toJS()} />;
};

BlogPagePreview.propTypes = {};

export default BlogPagePreview;
