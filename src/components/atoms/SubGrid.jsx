import styled from 'styled-components';
import PropTypes from "prop-types";

const SubGrid = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  grid-column: ${props => props.colSpan};
  grid-row: ${props => props.rowSpan};
  background-color: ${props => props.backgroundColor};
`;

SubGrid.propTypes = {
    colSpan: PropTypes.string,
    rowSpan: PropTypes.string,
    backgroundColor: PropTypes.string,
    justifyContent: function (props, propName) {
        if (!props[propName].match(/(flex-start|flex-end|center|space-between|space-around|space-evenly)/)) {
            return new Error ('Prop must be a valid flex property string');
        }
    },
    alignItems: function (props, propName) {
        if (!props[propName].match(/(flex-start|flex-end|center|stretch|baseline)/)) {
            return new Error ('Prop must be a valid flex property string');
        }
    },
};

SubGrid.defaultProps = {
    colSpan: '1 / 1',
    rowSpan: '1 / 1',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
};

export default SubGrid;