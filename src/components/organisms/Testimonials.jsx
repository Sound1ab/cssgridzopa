import React from 'react';
import styled from 'styled-components';
import Grid from '../atoms/Grid';
import SubGrid from '../atoms/SubGrid';
import Wrapper from '../atoms/Wrapper';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import {breakpoints} from '../utils/breakpoints';

let ReponsiveGrid = Grid.extend`
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  grid-template-areas: 
    "c1 c1 c1 c1 c2 c2 c2 c2 c3 c3 c3 c3"
    "l1 l1 l1 l2 l2 l2 l3 l3 l3 l4 l4 l4";
  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto auto auto;
    grid-template-areas: 
      "c1"
      "c2"
      "c3"
      "l1"
      "l2"
      "l3"
      "l4";
  }  
`;

let Avatar = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  margin-bottom: 16px;
  background-color: var(--dark-grey);
`

const Testimonials = ({props}) => {
    return (
        <Wrapper
            padding={[80, 0, 80, 0]}
            backgroundImage={require('../../assets/images/section5-background.jpg')}
        >
            <ReponsiveGrid>
                <SubGrid colSpan={'c1'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>
                        <Avatar/>
                        <Heading type={'h4'} color={'var(--white)'}>Jonathon Doe</Heading>
                        <Heading type={'h5'} color={'var(--pink)'}>Jonathon Doe</Heading>
                        <Text marginBottom={16}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus."
                        </Text>
                    </Wrapper>
                </SubGrid>
                <SubGrid colSpan={'c2'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>
                        <Avatar/>
                        <Heading type={'h4'} color={'var(--white)'}>Jonathon Doe</Heading>
                        <Heading type={'h5'} color={'var(--pink)'}>Jonathon Doe</Heading>
                        <Text marginBottom={16}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus."
                        </Text>
                    </Wrapper>
                </SubGrid>
                <SubGrid colSpan={'c3'}>
                    <Wrapper flexDirection={'column'} textAlign={'center'}>
                        <Avatar/>
                        <Heading type={'h4'} color={'var(--white)'}>Jonathon Doe</Heading>
                        <Heading type={'h5'} color={'var(--pink)'}>Jonathon Doe</Heading>
                        <Text marginBottom={16}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus."
                        </Text>
                    </Wrapper>
                </SubGrid>
                <SubGrid colSpan={'l1'}>
                    <Wrapper>
                        <img src={require('../../assets/images/section5-logo1.png')} alt="icon" />
                    </Wrapper>
                </SubGrid>
                <SubGrid colSpan={'l2'}>
                    <Wrapper>
                        <img src={require('../../assets/images/section5-logo2.png')} alt="icon" />
                    </Wrapper>
                </SubGrid>
                <SubGrid colSpan={'l3'}>
                    <Wrapper>
                        <img src={require('../../assets/images/section5-logo3.png')} alt="icon" />
                    </Wrapper>
                </SubGrid>
                <SubGrid colSpan={'l4'}>
                    <Wrapper>
                        <img src={require('../../assets/images/section5-logo4.png')} alt="icon" />
                    </Wrapper>
                </SubGrid>
            </ReponsiveGrid>
        </Wrapper>
    )
};

export default Testimonials;