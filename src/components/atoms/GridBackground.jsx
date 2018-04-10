import styled from 'styled-components';
import PropTypes from "prop-types";

const GridBackground = styled.div`
  background-color: red;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  z-index: -1;
`;


GridBackground.propTypes = {
    src: PropTypes.string
};

GridBackground.defaultProps = {
    src: ''
};

export default GridBackground;