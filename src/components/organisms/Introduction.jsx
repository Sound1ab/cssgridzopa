import React from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import Wrapper from '../atoms/Wrapper';
import Text from '../atoms/Text';
import Triangle from '../atoms/Triangle';
import {breakpoints} from "../utils/breakpoints";

let RepsoniveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

let LContainer = styled.div`
  flex: 2 1 auto;
`;

let RContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: var(--light-grey);
  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`;

const Introduction = ({props}) => {
    return (
        <RepsoniveContainer>
            <LContainer>
                <Wrapper
                    padding={[100]}
                    flexDirection={'column'}
                    alignItems={'flex-start'}
                >
                    <Heading type={'h3'}>New Design</Heading>
                    <Heading type={'h2'}>There is no other platform for you as like...</Heading>
                    <Text marginBottom={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus. Curabitur a fermentum neque. Nam iaculis lobortis velit vitae rhoncus. Mauris at ullamcorper sem, auctor porttitor mauris. Phasellus eros lectus, faucibus nec dignissim id, auctor vel sapien.
                    </Text>
                    <Text>
                        Nam congue lorem non molestie sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget lectus pulvinar, scelerisque mi et, placerat mauris.
                    </Text>
                </Wrapper>
            </LContainer>
            <RContainer>
                <Triangle size={500}/>
            </RContainer>
        </RepsoniveContainer>
    )
};

export default Introduction;