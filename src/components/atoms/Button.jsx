import styled, {css} from 'styled-components';
import PropTypes from "prop-types";

const Button = styled.button`
  border: none;
  padding: 10px 48px;
  text-transform: uppercase;
  font-size: calc(var(--fz-base) * 1px);
  background-color: var(--pink);
  color: var(--white); 
  border-radius: 5px;
  ${props => props.marginBottom ? css`margin-bottom: 16px` : css`margin-bottom: 0`}
  ${props => props.expand ? css`width: 100%` : null}
`;

Button.propTypes = {
    marginBottom: PropTypes.bool,
    expand: PropTypes.bool
};

Button.defaultProps = {
    marginBottom: true,
    expand: false
};

export default Button;