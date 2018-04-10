import React from 'react';
import Heading from '../atoms/Heading';
import Grid from '../atoms/Grid';
import SubGrid from '../atoms/SubGrid';
import GridBackground from '../atoms/GridBackground';
import Wrapper from '../atoms/Wrapper';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

const HeaderBanner = () => {
    return (
        <Grid
            columns={{
                l: '1fr [main-start] minmax(auto, 650px) [main-end] 1fr'
            }}
            rows={{
                l: '1fr 124px 1fr'
            }}
        >
            <GridBackground
                colSpan={'1/-1'}
                rowSpan={'1/-1'}
                src={require('../../assets/images/header-photo.jpg')}
            />
            <SubGrid
                colSpan={'main-start / main-end'}
                rowSpan={'1 / 1'}
                paddingTop={100}
            >
                <Wrapper
                    alignItems={'flex-end'}
                    textAlign={'center'}
                    marginTop={100}
                >
                    <Heading>There is no other platform for you as like</Heading>
                </Wrapper>
            </SubGrid>
            <SubGrid
                colSpan={'main-start / main-end'}
                rowSpan={'2/2'}
            >
                <img
                    src={require('../../assets/images/header-icon-play.png')}
                />
            </SubGrid>
            <SubGrid
                colSpan={'main-start / main-end'}
                rowSpan={'3/3'}
            >
                <Wrapper
                    justifyContent={'flex-start'}
                    flexDirection={'column'}
                >
                    <Button>try now</Button>
                    <Text size={'small'}>* No need to add card details</Text>
                </Wrapper>
            </SubGrid>
        </Grid>
    )
};

export default HeaderBanner;