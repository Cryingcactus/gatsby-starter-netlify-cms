import React from "react";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, widgetFor }) => {
    return <IndexPageTemplate sections={entry.getIn(["data"]).toJS()} />;
};

IndexPagePreview.propTypes = {};

export default IndexPagePreview;
