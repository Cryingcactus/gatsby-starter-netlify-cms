import React from "react";
import { ServicesPageTemplate } from "../../templates/services-page";

const ServicesPagePreview = ({ entry, widgetFor }) => {
    return <ServicesPageTemplate sections={entry.getIn(["data"]).toJS()} />;
};

ServicesPagePreview.propTypes = {};

export default ServicesPagePreview;
