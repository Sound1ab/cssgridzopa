import React from 'react';
import styled from 'styled-components';
import {breakpoints} from '../utils/breakpoints';
import Heading from '../atoms/Heading';
import Grid from '../atoms/Grid';
import SubGrid from '../atoms/SubGrid';
import Wrapper from '../atoms/Wrapper';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

let ResponsiveGrid = Grid.extend`
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "heading heading heading heading"
    "content-1 content-2 content-3 content-4";
    "tc tc tc tc";
  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr 1fr 1fr auto;
    grid-template-areas: 
      "heading"
      "content-1"
      "content-2"
      "content-3"
      "content-4"
      "tc";
  }
`;

const Features = () => {
    return (
        <Wrapper
            padding={[80, 0, 80, 0]}
            backgroundColor={'var(--purple)'}
        >
            <ResponsiveGrid>
                <SubGrid colSpan={'heading'}>
                    <Wrapper
                        flexDirection={'column'}
                        textAlign={'center'}
                    >
                        <Heading type={'h3'}>New Features</Heading>
                        <Heading type={'h2'} color={'var(--white)'}>Over 1000 designer are using...</Heading>
                    </Wrapper>
                </SubGrid>
                <SubGrid colStart={'content-1'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>

                    </Wrapper>
                </SubGrid>
                <SubGrid colStart={'content-2'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>

                    </Wrapper>
                </SubGrid>
                <SubGrid colStart={'content-3'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>

                    </Wrapper>
                </SubGrid>
                <SubGrid colStart={'content-4'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>
                        <Button noMarginBottom>Try now</Button>
                    </Wrapper>
                </SubGrid>
            </ResponsiveGrid>
        </Wrapper>
    )
};

export default Features;