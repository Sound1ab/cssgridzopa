import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid var(--dark-grey);
  border-radius: 5px;
  color: var(--white);
  text-transform: uppercase;
  font-size: calc(var(--fz-base) * 1px);
  padding: 10px 18px;
  width: 100%;
  background-color: rgba(255,255,255,0.1)
`;

export default Input;