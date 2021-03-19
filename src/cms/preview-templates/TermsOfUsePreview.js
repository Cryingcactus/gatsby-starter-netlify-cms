import React from "react";
import { TermsOfUsePageTemplate } from "../../templates/terms-of-use-page";

const TermsOfUsePagePreview = ({ entry, widgetFor }) => (
    <TermsOfUsePageTemplate sections={entry.getIn(["data"]).toJS()} />
);

TermsOfUsePagePreview.propTypes = {};

export default TermsOfUsePagePreview;
