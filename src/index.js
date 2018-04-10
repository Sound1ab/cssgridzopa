import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components';

injectGlobal`
    :root {
        /* Family */
        --ff-base: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        --ff-heading: 'PT Serif', Arial, Tahoma, sans-serif;
        
        /* Style */
        --fz-small: 16;
        --fz-base: 18;
        --lh-base: 19;
        --fw-base: 400;
        
        /* Colours */
        --black: #282828;
        --white: #ffffff;
        --pink: #fb8686;
        --light-grey: #ececec;
        --dark-grey: #7f84a1;
        --purple: #323969;
        
        /* Margin */
        --gutters: 120px;
        
        /* Breakpoints */
        --xs: 480px;
        --s: 640px;
        --m: 960px;
        --l: 1200px;
    }
    @media (max-width: 960px) {
        :root {
          --gutters: 60px;
        }
    }
    @media (max-width: 640px) {
        :root {
          --gutters: 30px;
        }
    }
    @media (max-width: 480px) {
        :root {
          --gutters: 15px;
        }
    }
    
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    html {
        width: 100vw;
        overflow-x: hidden;
    }
    
    body {
        font-family: var(--ff-base);
        font-weight: var(--fw-base);
        line-height: calc(var(--lh-base) / var(--fz-base));
        font-size: calc(var(--fz-base) * 1px);
        color: black;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    h1 {
        font-size: 44px;
        color: var(--black);
    }
    
    h2 {
        font-size: 36px;
        font-weight: bold;
        color: var(--black);
        margin-bottom: 32px;
    }
    
    h3 {
        font-size: 24px;
        color: var(--pink);
        text-transform: uppercase;
        margin-bottom: 16px;
    }
    
    h4 {
        font-size: 18px;
        color: var(--black);
        margin-bottom: 16px;
    }
    
    h5 {
        font-size: 16px;
        color: var(--black);
    }
    
    h6 {
        font-size: 14px;
        color: var(--black);
    }
`;

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();