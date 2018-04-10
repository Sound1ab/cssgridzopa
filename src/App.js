import React, {Component} from 'react';
import HeaderBanner from './components/organisms/HeaderBanner';
import Introduction from './components/organisms/Introduction';
import Features from './components/organisms/Features';
import Responsive from './components/organisms/Responsive';
import Testimonials from './components/organisms/Testimonials';
import NewFeatures from './components/organisms/NewFeatures';
import SignUp from './components/organisms/SignUp';
import Footer from './components/organisms/Footer';
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
                <NewFeatures/>
                <SignUp/>
                <Footer/>
            </ErrorBoundary>
        );
    }
}

export default App;
