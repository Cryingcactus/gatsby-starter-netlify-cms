import React from "react";
import { PrivacyPolicyPageTemplate } from "../../templates/privacy-policy-page";

const PrivacyPolicyPagePreview = ({ entry, widgetFor }) => (
    <PrivacyPolicyPageTemplate sections={entry.getIn(["data"]).toJS()} />
);

PrivacyPolicyPagePreview.propTypes = {};

export default PrivacyPolicyPagePreview;
