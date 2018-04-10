import styled from 'styled-components';
import PropTypes from "prop-types";
import {css} from 'styled-components';

const sizes = {
    xs: 480,
    s: 640,
    m: 960,
    l: 1200
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label]}px) {
          ${css(...args)}
        }
      `;
    return acc
}, {});

const Grid = styled.section`
  position: relative;
  display: grid;
    grid-template-columns: ${props => props.columns.l};
    grid-template-rows: ${props => props.rows.l};
  height: ${props => props.height ? `${props.height}px` : 'auto'}
  width: 100%;
  color: pink;
  ${props => props.overflow ? css`overflow: ${props => props.overflow}` : null};
  ${props => props.columns.xs ? media.xs`grid-template-columns: ${props.columns.xs};` : null}
  ${props => props.columns.m ? media.m`grid-template-columns: ${props.columns.m};` : null}
  ${props => props.rows.m ? media.xs`grid-template-rows: ${props.rows.xs};` : null}
  ${props => props.rows.m ? media.m`grid-template-rows: ${props.rows.m};` : null}
`;

Grid.propTypes = {
    rows: PropTypes.objectOf(PropTypes.string),
    columns: PropTypes.objectOf(PropTypes.string),
    height: function (props, propName) {
        const prop = props[propName];
        if (typeof prop !== 'number') {
            return new Error('Prop must be a number. Prop will be represented in px.');
        }
    },
    overflow: PropTypes.string
};

Grid.defaultProps = {
    rows: {
        l: '1fr'
    },
    columns: {
        l: '1fr'
    },
    height: 0,
    overflow: 'visible'
};

export default Grid;