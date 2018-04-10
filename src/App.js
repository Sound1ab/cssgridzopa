import React, {Component} from 'react';
import HeaderBanner from './components/organisms/HeaderBanner';
import Introduction from './components/organisms/Introduction';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                {/*<HeaderBanner/>*/}
                <Introduction/>
            </ErrorBoundary>
        );
    }
}

export default App;
