import React from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  ${props => props.button 
    ? css`
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 40px;
        background-color: var(--pink);
        border-radius: 0 5px 5px 0;
        background-image: url(${props => props.buttonImage});
        background-size: 20px 20px;
        background-position: center;
        background-repeat: no-repeat;
      }
    `
    : null}
`

const InnerInput = styled.input`
  border: 1px solid var(--dark-grey);
  border-radius: 5px;
  color: var(--white);
  text-transform: uppercase;
  font-size: calc(var(--fz-base) * 1px);
  padding: 10px 18px;
  width: 100%;
  background-color: rgba(0,0,0,0.1);
  &::placeholder {
    ${props => props.light ? css`color: var(--white)` : css`color: var(--dark-grey)`}
  }
`;

let Input = ({light, type, placeholder, button, buttonImage}) => {
    return (
        <Wrapper button={button} buttonImage={buttonImage}>
            <InnerInput type={type} placeholder={placeholder} light={light}/>
        </Wrapper>
    )
}

export default Input;