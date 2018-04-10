import React from 'react';
import styled from 'styled-components';
import {breakpoints} from '../utils/breakpoints';
import Heading from '../atoms/Heading';
import Grid from '../atoms/Grid';
import SubGrid from '../atoms/SubGrid';
import Wrapper from '../atoms/Wrapper';
import Text from '../atoms/Text';

let ResponsiveGrid = Grid.extend`
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "heading heading heading"
    "content-1 content-2 content-3";
  color: pink;
  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr 1fr;
    grid-template-areas: 
      "heading"
      "content-1"
      "content-2"
      "content-3"
  }
`;

let Icon = styled.img`
  margin-bottom: 16px;
  width: 65px;
  height: 65px;
`;

const Features = () => {
    return (
        <Wrapper
            padding={[80, 0, 80, 0]}
            backgroundImage={require('../../assets/images/section3-photoBackground.jpg')}
        >
            <ResponsiveGrid>
                <SubGrid colSpan={'heading'}>
                    <Wrapper
                        flexDirection={'column'}
                        textAlign={'center'}
                    >
                        <Heading type={'h3'}>New Features</Heading>
                        <Heading type={'h2'}>Some awesome features</Heading>
                    </Wrapper>
                </SubGrid>
                <SubGrid colStart={'content-1'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>
                        <Icon src={require('../../assets/images/section3-icon1.png')} />
                        <Heading type={'h4'}>Some awesome features</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus.
                        </Text>
                    </Wrapper>
                </SubGrid>
                <SubGrid colStart={'content-2'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>
                        <Icon src={require('../../assets/images/section3-icon2.png')} />
                        <Heading type={'h4'}>Some awesome features</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus.
                        </Text>
                    </Wrapper>
                </SubGrid>
                <SubGrid colStart={'content-3'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>
                        <Icon src={require('../../assets/images/section3-icon3.png')} />
                        <Heading type={'h4'}>Some awesome features</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus.
                        </Text>
                    </Wrapper>
                </SubGrid>
            </ResponsiveGrid>
        </Wrapper>
    )
};

export default Features;