import styled, {css} from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 12px 48px;
  text-transform: uppercase;
  font-size: calc(var(--fz-base) * 1px);
  background-color: var(--pink);
  color: var(--white); 
  border-radius: 5px;
  ${props => props.noMarginBottom ? css`margin-bottom: 0` : css`margin-bottom: 16px`}
`;

export default Button;