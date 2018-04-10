import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = ({type, children, className}) => {
    return React.createElement(type, {className: className}, children);
};

StyledHeading.propTypes = {
    color: PropTypes.string,
    type: function (props, propName) {
        if (!props[propName].match(/(h1|h2|h3|h4|h5|h6)/)) {
            return new Error ('Invalid prop type');
        }
    }
};

StyledHeading.defaultProps = {
    color: 'var(--black)',
    type: 'h1'
};

export default styled(StyledHeading)`
    color: ${props => props.color};
    font-family: var(--ff-heading);
    line-height: calc(var(--lh-base) / var(--fz-base));
`;
