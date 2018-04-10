import React from 'react';
import Wrapper from '../atoms/Wrapper';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

const NewFeatures = ({props}) => {
    return (
        <div>
            <Wrapper padding={[80, 18, 80, 18]} flexDirection={'column'} textAlign={'center'}>
                <Heading type={'h3'} color={'var(--pink)'}>New Features</Heading>
                <Heading type={'h2'}>Some awesome features</Heading>
                <Text maxWidth={650}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus. Curabitur a fermentum neque. Nam iaculis lobortis velit vitae rhoncus. Mauris at ullamcorper sem, auctor porttitor mauris. Phasellus eros lectus, faucibus nec dignissim id, auctor vel sapien.
                </Text>
            </Wrapper>
            <Wrapper padding={[0]}>
                <img src={require('../../assets/images/section6-browser.png')} alt="macbook"/>
            </Wrapper>
        </div>

    )
};

export default NewFeatures;