import React from "react";
import { SolutionsPageTemplate } from "../../templates/solutions-page";

const SolutionsPagePreview = ({ entry, widgetFor }) => {
    return <SolutionsPageTemplate sections={entry.getIn(["data"]).toJS()} />;
};

SolutionsPagePreview.propTypes = {};

export default SolutionsPagePreview;
