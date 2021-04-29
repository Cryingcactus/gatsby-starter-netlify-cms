import React from "react";
import PropTypes from "prop-types";

const Arrow = ({ conditionToRender, label, direction, width, click }) => {
    if (conditionToRender) {
        return (
            <div
                className="arrowButton"
                tabIndex={0}
                aria-label={label}
                role="button"
                onKeyPress={() => {}}
                onClick={click}
            >
                <span className={`arrow ${direction}`} style={{ width }} />
            </div>
        );
    }
    return <span style={{ width }} />;
};

Arrow.propTypes = {
    conditionToRender: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
};

export default Arrow;
