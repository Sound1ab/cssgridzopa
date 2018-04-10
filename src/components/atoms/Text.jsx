import styled from 'styled-components';
import PropTypes from "prop-types";

const Text = styled.p`
  color: var(--dark-grey);
  font-size: calc(var(--fz-${props => props.size}) * 1px);
  margin-bottom: ${props => props.marginBottom ? '16px' : '0'}
`;

Text.propTypes = {
    marginBottom: PropTypes.bool,
    size: function (props, propName) {
        if (!props[propName].match(/(small|base)/)) {
            return new Error ('Prop must be either small or base');
        }
    },
};

Text.defaultProps = {
    marginBottom: false,
    size: 'base'
};

export default Text;