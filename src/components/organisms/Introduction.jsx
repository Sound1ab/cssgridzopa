import React from 'react';
import Heading from '../atoms/Heading';
import Grid from '../atoms/Grid';
import SubGrid from '../atoms/SubGrid';
import GridBackground from '../atoms/GridBackground';
import Wrapper from '../atoms/Wrapper';
import Text from '../atoms/Text';

const GridBackgroundRotate = GridBackground.extend`
  width: 2000px;
  height: 2000px;
  transform: rotate(-45deg) translateY(-72px) translateX(100px);
`;

const Introduction = ({props}) => {
    return (
        <Grid
            columns={{
                l: '1.5fr 1fr',
                m: '1fr'
            }}
            rows={'1'}
            height={725}
        >
            <Grid
                columns={{
                    l: 'var(--gutters) [main-start] 1fr [main-end] var(--gutters)'
                }}
            >
                <SubGrid
                    colSpan={'main-start / main-end'}
                    rowSpan={'1 / 1'}
                >
                    <Wrapper flexDirection={'column'} alignItems={'flex-start'}>
                        <Heading type={'h3'}>New Design</Heading>
                        <Heading type={'h2'}>There is no other platform for you as like...</Heading>
                        <Text marginBottom={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium odio sit amet enim imperdiet, a lobortis neque tempus. Curabitur a fermentum neque. Nam iaculis lobortis velit vitae rhoncus. Mauris at ullamcorper sem, auctor porttitor mauris. Phasellus eros lectus, faucibus nec dignissim id, auctor vel sapien.
                        </Text>
                        <Text>
                            Nam congue lorem non molestie sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget lectus pulvinar, scelerisque mi et, placerat mauris.
                        </Text>
                    </Wrapper>
                </SubGrid>
            </Grid>
            <Grid
                columns={{
                    l: '1fr'
                }}
                rows={{
                    l: '1fr 2fr'
                }}
                overflow={'hidden'}
            >
                <GridBackground
                    backgroundColor={'var(--light-grey)'}
                    rowSpan={'1/3'}
                />
                <GridBackgroundRotate
                    rowSpan={'2/3'}
                />
            </Grid>
        </Grid>
    )
};

export default Introduction;