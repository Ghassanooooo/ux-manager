import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'semantic-ui-less/semantic.less';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-quill/dist/quill.snow.css';
import './index.less';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import * as serviceWorker from './serviceWorker';
import AppUxManager from './uxManager/AppUxManager';
require('dotenv').config();
console.log('HTML5Backend ===> ', HTML5Backend);

const REACT_APP_IS_UX_MANAGER = process.env.REACT_APP_IS_UX_MANAGER;

ReactDOM.render(
    REACT_APP_IS_UX_MANAGER ? (
        <BrowserRouter>
            <DragDropContextProvider backend={HTML5Backend}>
                <AppUxManager />
            </DragDropContextProvider>
        </BrowserRouter>
    ) : (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),

    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
