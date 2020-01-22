import React, { Component } from 'react';
import './App.less';
import Navbar from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import Router from './Routers/Router';
import { Container } from 'semantic-ui-react';
import ErrorBound from './containers/ErrorBound/ErrorBound';

/**
|--------------------------------------------------
| Set the Token in the header for each req
|--------------------------------------------------
*/

class App extends Component {
    render() {
        return (
            <ErrorBound>
                <Navbar>
                    <Container>
                        <Router />
                    </Container>

                    <Footer />
                </Navbar>
            </ErrorBound>
        );
    }
}

export default App;
