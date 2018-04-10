import React from 'react';
import styled from 'styled-components';
import {breakpoints} from '../utils/breakpoints';
import Heading from '../atoms/Heading';
import Grid from '../atoms/Grid';
import SubGrid from '../atoms/SubGrid';
import Wrapper from '../atoms/Wrapper';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

let ResponsiveGrid = Grid.extend`
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "heading heading heading heading"
    "content-1 content-2 content-3 content-4"
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

let FloatingText = Text.extend`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  &:before {
    content: '';
    width: 20px;
    height: 27px;
    background-image: url('${props => props.pseudoImage}');
    position: absolute;
    left: -25px;
    top: 8px;
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
                    <Wrapper flexDirection={'column'} textAlign={'center'} padding={[40, 18, 40, 18]}>
                        <Input type="text" placeholder="full name"/>
                    </Wrapper>
                </SubGrid>
                <SubGrid colStart={'content-2'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>
                        <Input type="text" placeholder="your email"/>
                    </Wrapper>
                </SubGrid>
                <SubGrid colStart={'content-3'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>
                        <Input type="text" placeholder="password"/>
                    </Wrapper>
                </SubGrid>
                <SubGrid colStart={'content-4'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>
                        <FloatingText
                            light={true}
                            pseudoImage={require('../../assets/images/arrow.png')}
                        >30 days free trial for all</FloatingText>
                        <Button marginBottom={false} expand={true}>Try now</Button>
                    </Wrapper>
                </SubGrid>
                <SubGrid gridArea={'tc'}>
                    <Wrapper>
                        <Text marginBottom={0}>
                            By signing up you agree to our terms & services
                        </Text>
                    </Wrapper>
                </SubGrid>
            </ResponsiveGrid>
        </Wrapper>
    )
};

export default Features;