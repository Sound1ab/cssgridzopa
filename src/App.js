import React, {Component} from 'react';
import HeaderBanner from './components/organisms/HeaderBanner';
import Introduction from './components/organisms/Introduction';
import Features from './components/organisms/Features';
import Responsive from './components/organisms/Responsive';
import Testimonials from './components/organisms/Testimonials';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <HeaderBanner/>
                <Introduction/>
                <Features/>
                <Responsive/>
                <Testimonials/>
            </ErrorBoundary>
        );
    }
}

export default App;
