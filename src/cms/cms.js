import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import SolutionsPagePreview from "./preview-templates/SolutionsPagePreview";
import TermsOfUsePagePreview from "./preview-templates/TermsOfUsePreview";
import PrivacyPolicyPagePreview from "./preview-templates/PrivacyPolicyPreview";

export * from "./cms-components.constants";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("solutions", SolutionsPagePreview);
CMS.registerPreviewTemplate("termsOfUse", TermsOfUsePagePreview);
CMS.registerPreviewTemplate("privacyPolicy", PrivacyPolicyPagePreview);

const quoteComponent = (props) => {
    console.log(props);
    console.log(
        `<QuoteSection section={{title: "${props.quote}", textColor: "${props.textColor}", backgroundColor: "${props.backgroundColor}"}}/>`,
    );
    return `<QuoteSection section={{title: "${props.title}", textColor: "${props.textColor}", backgroundColor: "${props.backgroundColor}"}}/>`;
};

CMS.registerEditorComponent({
    id: "quote",
    label: "Quote",
    fields: [
        { name: "quote", label: "Quote", widget: "string" },
        { name: "textColor", label: "Text Color", widget: "string" },
        {
            name: "backgroundColor",
            label: "Background Color",
            widget: "string",
        },
    ],
    pattern: /^<QuoteSection section={{title: (.*), textColor: (.*), backgroundColor: (.*)$/,
    fromBlock: (match) => ({
        quote: match[1],
        textColor: match[2],
        backgroundColor: match[3],
    }),
    toBlock: (props) => quoteComponent(props),
    toPreview: (props) => quoteComponent(props),
});
