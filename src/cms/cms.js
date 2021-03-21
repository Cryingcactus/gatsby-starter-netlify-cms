import React from "react";
import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import SolutionsPagePreview from "./preview-templates/SolutionsPagePreview";
import TermsOfUsePagePreview from "./preview-templates/TermsOfUsePreview";
import PrivacyPolicyPagePreview from "./preview-templates/PrivacyPolicyPreview";
import TitleCopySection from "../components/TitleCopySection";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("solutions", SolutionsPagePreview);
CMS.registerPreviewTemplate("termsOfUse", TermsOfUsePagePreview);
CMS.registerPreviewTemplate("privacyPolicy", PrivacyPolicyPagePreview);

CMS.registerEditorComponent({
    // Internal id of the component
    id: "quote",
    // Visible label
    label: "Quote",
    // Fields the user need to fill out when adding an instance of the component
    fields: [
        { name: "quote", label: "Quote", widget: "string" },
        { name: "textColor", label: "Text Color", widget: "string" },
        {
            name: "backgroundColor",
            label: "Background Color",
            widget: "string",
        },
    ],
    // Pattern to identify a block as being an instance of this component
    pattern: /^quote (quote:)(.*)(textColor:)(.*)(backgroundColor:)(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: (match) => {
        console.log(match);
        return {
            quote: match[2],
            textColor: match[4],
            backgroundColor: match[6],
        };
    },
    // Function to create a text block from an instance of this component
    toBlock: (obj) =>
        `quote: ${obj.quote}, textColor: ${obj.textColor}, backgroundColor: ${obj.backgroundColor}`,
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: (obj) => (
        <TitleCopySection
            section={{
                quote: obj.quote,
                textColor: obj.textColor,
                backgroundColor: obj.backgroundColor,
            }}
        />
    ),
});
