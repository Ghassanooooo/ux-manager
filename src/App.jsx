import React, { Component } from 'react';
import './App.less';
import Navbar from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import Router from './Routers/Router';
import jwtDecode from 'jwt-decode';
import { Container } from 'semantic-ui-react';
import ErrorBound from './containers/ErrorBound/ErrorBound';
import axios from 'axios';
import UxManager from './uxManager/uxManager';
/**
|--------------------------------------------------
| Set the Token in the header for each req
|--------------------------------------------------
*/

class App extends Component {
    state = {
        isSignIn: false,
        isAdminNavbar: true,
        admin: false,
        email: null,
        exp: null,
        superAdmin: false,
        id: null,
        errors: null,
    };

    logoutHandler = () => {
        if (!!localStorage.getItem('access_token')) {
            localStorage.removeItem('access_token');
            this.setState({
                isSignIn: false,
                isAdminNavbar: true,
                admin: false,
                email: null,
                exp: null,
                superAdmin: false,
                id: null,
            });
            window.location.assign('/');
        }
    };

    getCsrfFunction = async () => {
        try {
            await axios('http://localhost:7000/api/v1/auth');
        } catch (error) {
            if (error.response) {
                this.setState({
                    ...this.state,
                    errors: { ...error.response.data, statusText: error.response.statusText },
                });
                return console.log('error', error.response.data);
            }
        }
    };

    componentDidMount() {
        this.getCsrfFunction();
        const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;

        if (!!accessToken) {
            const setAuthToken = token => {
                if (token) {
                    // Apply to every request
                    axios.defaults.headers.common['Authorization'] = token;
                } else {
                    // Delete auth header
                    delete axios.defaults.headers.common['Authorization'];
                }
            };
            setAuthToken(accessToken);
            const accessTokenDecoded = jwtDecode(accessToken);
            this.setState({
                ...this.state,
                admin: accessTokenDecoded.admin,
                email: accessTokenDecoded.email,
                exp: accessTokenDecoded.exp,
                superAdmin: accessTokenDecoded.superAdmin,
                id: accessTokenDecoded._id,
                isSignIn: true,
            });
            console.log('accessTokenDecoded ==>', accessTokenDecoded);
        }
    }

    adminNavbarToggelHandler = () => this.setState({ isAdminNavbar: !this.state.isAdminNavbar });
    render() {
        return (
            <ErrorBound>
                <Navbar>
                    <Container>
                        <UxManager />
                    </Container>

                    <Footer />
                </Navbar>
            </ErrorBound>
        );
    }
}

export default App;
/**
 * <Navbar
                    logoutHandler={this.logoutHandler}
                    isSignIn={this.state.isSignIn}
                    isAdmin={this.state.admin}
                    adminNavbarToggelHandler={this.adminNavbarToggelHandler}
                    isAdminNavbar={this.state.isAdminNavbar}
                >
                    <Container>
                        <Router />
                    </Container>

                    <Footer />
                    {this.state.admin && this.state.isAdminNavbar ? <AdminNavbar /> : null}
                </Navbar>
 */
