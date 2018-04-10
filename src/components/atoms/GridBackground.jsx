import styled from 'styled-components';
import PropTypes from "prop-types";
import {css} from 'styled-components';

const GridBackground = styled.div`
  background-color: ${props => props.backgroundColor};
  ${props => props.src ? css`background-image: url(${props => props.src})` : null};
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  grid-row: ${props => props.rowSpan};
  grid-column: ${props => props.colSpan};
  z-index: -1;
`;


GridBackground.propTypes = {
    colSpan: PropTypes.string,
    rowSpan: PropTypes.string,
    backgroundColor: PropTypes.string,
    src: PropTypes.string
};

GridBackground.defaultProps = {
    colSpan: '1 / 1',
    rowSpan: '1 / 1',
    backgroundColor: 'var(--pink)',
    src: ''
};

export default GridBackground;