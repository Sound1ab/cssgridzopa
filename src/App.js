import React, {Component} from 'react';
import {StyledInput} from './components/StyledInput';
import {StyledText} from './components/StyledText';
import {StyledTitle} from './components/StyledTitle';
import styled from 'styled-components';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <ErrorBoundary>
                <div className={this.props.className}>

                </div>
            </ErrorBoundary>
        );
    }
}

export default styled(App)`

`;
