import styled, {css} from 'styled-components';
import PropTypes from "prop-types";

const SubGrid = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  ${props => props.colStart ? css`grid-column-start: ${props => props.colStart}` : null};
  ${props => props.colEnd ? css`grid-column-end: ${props => props.colEnd}` : null};
  ${props => props.colSpan ? css`grid-column: ${props => props.colSpan}` : null};
  ${props => props.rowStart ? css`grid-row-start: ${props => props.rowStart}` : null};
  ${props => props.rowEnd ? css`grid-row-end: ${props => props.rowEnd}` : null};
  ${props => props.rowSpan ? css`grid-row: ${props => props.rowSpan}` : null};
  ${props => props.gridArea ? css`grid-area: ${props => props.gridArea}` : null};
  ${props => props.paddingTop ? css`padding-top: ${props.paddingTop}px` : null}
  ${props => props.paddingBottom ? css`padding-bottom: ${props.paddingBottom}px` : null}
  background-color: ${props => props.backgroundColor};
`;

SubGrid.propTypes = {
    paddingTop: PropTypes.number,
    paddingBottom: PropTypes.number,
    colStart: PropTypes.string,
    colEnd: PropTypes.string,
    colSpan: PropTypes.string,
    rowStart: PropTypes.string,
    rowEnd: PropTypes.string,
    rowSpan: PropTypes.string,
    gridArea: PropTypes.string,
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
    paddingTop: 0,
    paddingBottom: 0,
    colStart: '',
    colEnd: '',
    colSpan: '',
    rowStart: '',
    rowEnd: '',
    rowSpan: '',
    gridArea: '',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
};

export default SubGrid;