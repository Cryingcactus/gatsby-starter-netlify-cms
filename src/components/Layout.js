import React, { useContext, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { ThemeContext, ThemeContextProvider } from "../context/ThemeContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useSiteMetadata from "./SiteMetadata";
import "./all.scss";

const TemplateWrapper = ({ children, uri, backgroundColor }) => {
    const { title, description } = useSiteMetadata();
    const { state, dispatch } = useContext(ThemeContext);

    useEffect(() => {
        dispatch({
            type: "logoColor",
            backgroundColor: backgroundColor
                ? backgroundColor.toLowerCase()
                : "#ffffff",
        });
    }, [backgroundColor]);

    const ref = useRef(false);
    useEffect(() => {
        if (ref.current) {
            ref.current.style = `--logoColor: ${state.logoColor}; --mobileNavLogoColor: ${state.mobileNavLogoColor}`;
        }
    }, [ref, state.logoColor, state.mobileNavLogoColor]);

    return (
        <div ref={ref}>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix("/")}img/tgthr-fav.svg`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/tgthr-fav.svg`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/tgthr-fav.svg`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix("/")}img/tgthr-fav.svg`}
                    color="#ff4400"
                />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta
                    property="og:image"
                    content={`${withPrefix("/")}img/logo.svg`}
                />
            </Helmet>
            <Navbar />
            <main>{children}</main>
            <Footer parallax={!(uri && uri.includes("/contact"))} />
        </div>
    );
};

const Layout = (props) => (
    <ThemeContextProvider>
        <TemplateWrapper {...props} />
    </ThemeContextProvider>
);

export default Layout;
