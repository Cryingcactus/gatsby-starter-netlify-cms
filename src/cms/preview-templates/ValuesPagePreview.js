import React from "react";
import { ValuesPageTemplate } from "../../templates/values-page";

const ValuesPagePreview = ({ entry, widgetFor }) => {
    return <ValuesPageTemplate sections={entry.getIn(["data"]).toJS()} />;
};

ValuesPagePreview.propTypes = {};

export default ValuesPagePreview;
