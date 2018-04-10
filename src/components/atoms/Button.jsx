import styled from 'styled-components';
import PropTypes from "prop-types";

const Button = styled.button`
  border: none;
  padding: 12px 48px;
  text-transform: uppercase;
  font-size: calc(var(--fz-base) * 1px);
  background-color: var(--pink);
  color: var(--white); 
  border-radius: 5px;
  margin-bottom: 16px;
`;

export default Button;