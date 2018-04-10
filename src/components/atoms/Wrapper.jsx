import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from "prop-types";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.backgroundColor};
  ${props => props.backgroundImage ? css`background-image: url(${props => props.backgroundImage})` : null};
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const WrapperDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${props => props.padding.map(el => `${el}px`).join(' ')};
  text-align: ${props => props.textAlign}
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection}
  ${props => props.maxWidth ? css`max-width: ${props.maxWidth}px` : null};
  ${props => props.margin ? css`margin: ${props.margin}` : null};`;

const Wrapper = ({padding, textAlign, justifyContent, alignItems, flexDirection, backgroundColor, backgroundImage, maxWidth, margin, children}) => {
    return (
        <WrapperDiv
            maxWidth={maxWidth}
            margin={margin}
            padding={padding}
            textAlign={textAlign}
            justifyContent={justifyContent}
            alignItems={alignItems}
            flexDirection={flexDirection}
        >
            <Background
                backgroundColor={backgroundColor}
                backgroundImage={backgroundImage}
            />
            {children}
        </WrapperDiv>
    )
};

Wrapper.propTypes = {
    padding: PropTypes.arrayOf(PropTypes.number),
    textAlign: function (props, propName) {
        if (!props[propName].match(/(left|center|right)/)) {
            return new Error ('Prop must be a valid text-align string');
        }
    },
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    flexDirection: function (props, propName) {
        if (!props[propName].match(/(row|column)/)) {
            return new Error ('Prop must be a valid text-align string');
        }
    },
    justifyContent: function (props, propName) {
        if (!props[propName].match(/(flex-start|flex-end|center|space-between|space-around|space-evenly)/)) {
            return new Error ('Prop must be a valid flex property string');
        }
    },
    alignItems: function (props, propName) {
        if (!props[propName].match(/(flex-start|flex-end|center|stretch|baseline)/)) {
            return new Error ('Prop must be a valid flex property string');
        }
    },
};

Wrapper.defaultProps = {
    padding: [18],
    textAlign: 'left',
    backgroundColor: 'transparent',
    backgroundImage: '',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
};

export default Wrapper;