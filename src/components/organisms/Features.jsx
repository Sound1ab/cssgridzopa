import React from 'react';
import styled from 'styled-components';
import {breakpoints} from '../utils/breakpoints';
import Heading from '../atoms/Heading';
import SubGrid from '../atoms/SubGrid';
import GridBackground from '../atoms/GridBackground';
import Wrapper from '../atoms/Wrapper';
import Text from '../atoms/Text';

let Grid = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: var(--gutters) repeat(3, 1fr) var(--gutters);
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "gutter-1 heading heading heading gutter-2"
    "gutter-1 content-1 content-2 content-3 gutter-2";
  color: pink;
  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: var(--gutters) 1fr var(--gutters);
    grid-template-rows: auto 1fr 1fr 1fr;
    grid-template-areas: 
      "gutter-1 heading gutter-2"
      "gutter-1 content-1 gutter-2"
      "gutter-1 content-2 gutter-2"
      "gutter-1 content-3 gutter-2"
  }
`;

let Icon = styled.img`
  margin-bottom: 16px;
  width: 65px;
  height: 65px;
`;

let ContentGrid = SubGrid.extend`
  padding-bottom: 50px;
  @media (max-width: ${breakpoints.s}px) {
    padding-bottom: 0;
  }
`

const Features = () => {
    return (
        <Grid>
            <GridBackground
                colSpan={'1/-1'}
                rowSpan={'1/-1'}
                src={require('../../assets/images/section3-photoBackground.jpg')} />
            <SubGrid colSpan={'heading'} paddingTop={40}>
                <Wrapper
                    flexDirection={'column'}
                    textAlign={'center'}
                >
                    <Heading type={'h3'}>New Features</Heading>
                    <Heading type={'h2'}>Some awesome features</Heading>
                </Wrapper>
            </SubGrid>
            <ContentGrid colStart={'content-1'}>
                <Wrapper flexDirection={'column'} textAlign={'center'}>
                    <Icon src={require('../../assets/images/section3-icon1.png')} />
                    <Heading type={'h4'}>Some awesome features</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus.
                    </Text>
                </Wrapper>
            </ContentGrid>
            <ContentGrid colStart={'content-2'}>
                <Wrapper flexDirection={'column'} textAlign={'center'}>
                    <Icon src={require('../../assets/images/section3-icon2.png')} />
                    <Heading type={'h4'}>Some awesome features</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus.
                    </Text>
                </Wrapper>
            </ContentGrid>
            <ContentGrid colStart={'content-3'}>
                <Wrapper flexDirection={'column'} textAlign={'center'}>
                    <Icon src={require('../../assets/images/section3-icon3.png')} />
                    <Heading type={'h4'}>Some awesome features</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus.
                    </Text>
                </Wrapper>
            </ContentGrid>
        </Grid>
    )
};

export default Features;