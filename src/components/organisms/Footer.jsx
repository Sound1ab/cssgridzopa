import React from 'react';
import {breakpoints} from '../utils/breakpoints';
import Heading from '../atoms/Heading';
import Grid from '../atoms/Grid';
import SubGrid from '../atoms/SubGrid';
import Wrapper from '../atoms/Wrapper';
import Input from '../atoms/Input';
import List from '../atoms/List';
import Text from '../atoms/Text';

let ResponsiveGrid = Grid.extend`
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "c1 c2 c3 c4";
  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
      "c1"
      "c2"
      "c3"
      "c4";
  }
`

const Footer = () => {
    return (
        <Wrapper padding={[80, 18, 80, 18]}>
            <ResponsiveGrid>
                <SubGrid gridArea={'c1'}>
                    <Wrapper flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                        <Heading type={'h4'}>
                            Start Ex
                        </Heading>
                        <Text size={'small'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus.
                        </Text>
                    </Wrapper>
                </SubGrid>
                <SubGrid gridArea={'c2'}>
                    <Wrapper flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                        <Heading type={'h4'}>
                            Support
                        </Heading>
                        <List size={'small'}>
                            <li>Help center</li>
                            <li>Help center</li>
                            <li>Help center</li>
                        </List>
                    </Wrapper>
                </SubGrid>
                <SubGrid gridArea={'c3'}>
                    <Wrapper flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                        <Heading type={'h4'}>
                            About us
                        </Heading>
                        <List size={'small'}>
                            <li>About us</li>
                            <li>Terms of user</li>
                            <li>Privacy Policy</li>
                        </List>
                    </Wrapper>
                </SubGrid>
                <SubGrid gridArea={'c4'}>
                    <Wrapper flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                        <Heading type={'h4'}>
                            Get Newsletter
                        </Heading>
                        <Input
                            type="text"
                            placeholder="email"
                            button={true}
                            buttonImage={require('../../assets/images/section7-buttonIcon.png')}
                        />
                    </Wrapper>
                </SubGrid>
            </ResponsiveGrid>
        </Wrapper>
    )
};

export default Footer;