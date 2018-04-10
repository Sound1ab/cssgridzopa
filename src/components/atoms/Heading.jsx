import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledHeading = ({type, children, className}) => {
    return React.createElement(type, {className: className}, children);
};

StyledHeading.propTypes = {
    type: function (props, propName) {
        if (!props[propName].match(/(h1|h2|h3|h4|h5|h6)/)) {
            return new Error ('Invalid prop type');
        }
    }
};

StyledHeading.defaultProps = {
    type: 'h1'
};

export default styled(StyledHeading)`
    font-family: var(--ff-heading);
`;
