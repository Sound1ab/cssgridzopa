import React from 'react';
import styled from 'styled-components';
import Grid from '../atoms/Grid';
import SubGrid from '../atoms/SubGrid';
import Wrapper from '../atoms/Wrapper';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import {breakpoints} from '../utils/breakpoints';

let ResponsiveGrid = Grid.extend`
  grid-template-columns: var(--gutters) 1fr 1fr var(--gutters);
  grid-template-rows: 1fr;
  grid-template-areas: 
    "gutter-1 content-1 content-2 gutter-2";
  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: var(--gutters) 1fr var(--gutters);
    grid-template-rows: auto 1fr;
    grid-template-areas: 
      "gutter-1 content-1 gutter-2"
      "gutter-1 content-2 gutter-2"
  }
`;

let Image = styled.img`
  width: 100%;
  height: auto;
`;

let PaddedSubGrid = SubGrid.extend`
  padding-top: 80px;
  padding-bottom: 80px;
`;

const Responsive = ({props}) => {
    return (
        <ResponsiveGrid>
            <SubGrid colSpan={'content-1'}>
                <Wrapper>
                    <Image src={require('../../assets/images/section4-macbook.png')} />
                </Wrapper>
            </SubGrid>
            <PaddedSubGrid colSpan={'content-2'}>
                <Wrapper flexDirection={'column'} alignItems={'flex-start'}>
                    <Heading type={'h3'}>New Design</Heading>
                    <Heading type={'h2'}>Response design, just need you tap...</Heading>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus. Curabitur a fermentum neque. Nam iaculis lobortis velit vitae rhoncus. Mauris at ullamcorper sem, auctor porttitor mauris. Phasellus eros lectus, faucibus nec dignissim id, auctor vel sapien.</Text>
                </Wrapper>
            </PaddedSubGrid>
        </ResponsiveGrid>
    )
};

export default Responsive;