import React from 'react';
import PropTypes from 'prop-types';

const Responsive = ({props}) => {
    return (
        <div>hey</div>
    )
};

Responsive.propTypes = {
    testProp: PropTypes.string,
    customProp: function (props, propName) {
        if (!props[propName].match(/(h1|h2|h3|h4|h5|h6)/)) {
            return new Error ('ERROR');
        }
    }
};

Responsive.defaultProps = {
    testProp: ''
};

export default Responsive;