import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 18px;
  text-align: ${props => props.textAlign}
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection}
  background-color: ${props => props.backgroundColor};
`;

Wrapper.propTypes = {
    textAlign: function (props, propName) {
        if (!props[propName].match(/(left|center|right)/)) {
            return new Error ('Prop must be a valid text-align string');
        }
    },
    backgroundColor: PropTypes.string,
    flexDirection: function (props, propName) {
        if (!props[propName].match(/(row|column)/)) {
            return new Error ('Prop must be a valid text-align string');
        }
    },
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

Wrapper.defaultProps = {
    textAlign: 'left',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
};

export default Wrapper;