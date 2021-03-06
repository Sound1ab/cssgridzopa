import styled, {css} from 'styled-components';
import PropTypes from "prop-types";

const Text = styled.p`
  color: ${props => props.light ? 'var(--white)' : 'var(--dark-grey)'};
  font-size: calc(var(--fz-${props => props.size}) * 1px);
  margin-bottom: ${props => props.marginBottom ? '16px' : '0'}
  ${props => props.maxWidth ? css`max-width: ${props.maxWidth}px` : null}
`;

Text.propTypes = {
    light: PropTypes.bool,
    marginBottom: PropTypes.bool,
    size: function (props, propName) {
        if (!props[propName].match(/(small|base)/)) {
            return new Error ('Prop must be either small or base');
        }
    },
    maxWidth: PropTypes.number
};

Text.defaultProps = {
    light: false,
    marginBottom: false,
    size: 'base',
    maxWidth: 0
};

export default Text;