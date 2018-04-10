import React from 'react';
import styled from 'styled-components';
import Grid from '../atoms/Grid';
import SubGrid from '../atoms/SubGrid';
import Wrapper from '../atoms/Wrapper';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import {breakpoints} from '../utils/breakpoints';
import Triangle from '../atoms/Triangle';

let ResponsiveGrid = Grid.extend`
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
    "content-1 content-2";
  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
      "content-1"
      "content-2"
  }
`;

let Image = styled.img`
  width: 100%;
  height: auto;
`;

let AbsoluteTriangle = Triangle.extend`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(90deg);
`

const Responsive = ({props}) => {
    return (
        <Wrapper
            padding={[80, 0, 80, 0]}
        >
            <AbsoluteTriangle size={500}/>
            <ResponsiveGrid>
                <SubGrid colSpan={'content-1'}>
                    <Wrapper>
                        <Image src={require('../../assets/images/section4-macbook.png')} />
                    </Wrapper>
                </SubGrid>
                <SubGrid colSpan={'content-2'}>
                    <Wrapper flexDirection={'column'} alignItems={'flex-start'}>
                        <Heading type={'h3'}>New Design</Heading>
                        <Heading type={'h2'}>Response design, just need you tap...</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus. Curabitur a fermentum neque. Nam iaculis lobortis velit vitae rhoncus. Mauris at ullamcorper sem, auctor porttitor mauris. Phasellus eros lectus, faucibus nec dignissim id, auctor vel sapien.</Text>
                    </Wrapper>
                </SubGrid>
            </ResponsiveGrid>
        </Wrapper>
    )
};

export default Responsive;