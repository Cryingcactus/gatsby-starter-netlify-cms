import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, widgetFor }) => {
    return <IndexPageTemplate sections={entry.getIn(["data"]).toJS()} />;
};

IndexPagePreview.propTypes = {};

export default IndexPagePreview;
