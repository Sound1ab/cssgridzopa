import styled, {css} from 'styled-components';

const List = styled.ul`
  color: var(--dark-grey);
  font-size: calc(var(--fz-${props => props.size}) * 1px);
  list-style-type: none;
  li + li {
    margin-top: 5px;
  }
`;

List.propTypes = {
    size: function (props, propName) {
        if (!props[propName].match(/(small|base)/)) {
            return new Error ('Prop must be either small or base');
        }
    }
};

List.defaultProps = {
    size: 'base',
};

export default List;