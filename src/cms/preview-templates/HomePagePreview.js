import React from "react";
import PropTypes from "prop-types";
import { HomePageTemplate } from "../../templates/home-page";

const HomePagePreview = ({ entry, widgetFor }) => {
    return <HomePageTemplate sections={entry.getIn(["data"]).toJS()} />;
};

HomePagePreview.propTypes = {};

export default HomePagePreview;
