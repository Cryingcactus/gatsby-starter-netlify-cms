import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo, style }) => {
    const { alt = "", childImageSharp, image } = imageInfo;

    if (!!image && !!image.childImageSharp) {
        return (
            <Img
                fluid={image.childImageSharp.fluid}
                alt={alt}
                style={style ? style : {}}
            />
        );
    }

    if (!!childImageSharp) {
        return (
            <Img
                fluid={childImageSharp.fluid}
                alt={alt}
                style={style ? style : {}}
            />
        );
    }

    if (!!image && typeof image === "string")
        return <img style={style ? style : {}} src={image} alt={alt} />;

    return null;
};

PreviewCompatibleImage.propTypes = {
    imageInfo: PropTypes.shape({
        alt: PropTypes.string,
        childImageSharp: PropTypes.object,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        style: PropTypes.object,
    }).isRequired,
};

export default PreviewCompatibleImage;
