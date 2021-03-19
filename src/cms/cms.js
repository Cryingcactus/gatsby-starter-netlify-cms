import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import SolutionsPagePreview from "./preview-templates/SolutionsPagePreview";
import TermsOfUsePagePreview from "./preview-templates/TermsOfUsePreview";
import PrivacyPolicyPagePreview from "./preview-templates/PrivacyPolicyPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("solutions", SolutionsPagePreview);
CMS.registerPreviewTemplate("termsOfUse", TermsOfUsePagePreview);
CMS.registerPreviewTemplate("privacyPolicy", PrivacyPolicyPagePreview);
