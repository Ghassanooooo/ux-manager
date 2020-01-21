import React, { Component } from 'react';
import './RedirectMiddleware.less';
import GoogleSpinner from '../../../components/Components/GoogleSpinner/GoogleSpinner';
import { withRouter } from 'react-router';

export class RedirectMiddleware extends Component {
    componentDidMount() {
        console.log('this.props.match', this.props);
        localStorage.setItem('access_token', JSON.stringify(this.props.match.params.id));
        window.location.assign('/');
    }
    render() {
        return <GoogleSpinner />;
    }
}

export default withRouter(RedirectMiddleware);
