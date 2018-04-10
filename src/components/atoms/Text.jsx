import styled from 'styled-components';
import PropTypes from "prop-types";

const Text = styled.p`
  color: var(--dark-grey);
  font-size: calc(var(--fz-${props => props.size}) * 1px)
`;

Text.propTypes = {
    size: function (props, propName) {
        if (!props[propName].match(/(small|base)/)) {
            return new Error ('Prop must be either small or base');
        }
    },
};

Text.defaultProps = {
    size: 'base'
};

export default Text;