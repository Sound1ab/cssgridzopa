import styled from 'styled-components';
import PropTypes from 'prop-types';

let Triangle = styled.div`
  width: 0; 
  height: 0; 
  border-bottom: ${props => props.size}px solid ${props => props.color}; 
  border-left: ${props => props.size}px solid transparent;
`;

Triangle.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
};

Triangle.defaultProps = {
    size: 100,
    color: 'var(--pink)'
};

export default Triangle;