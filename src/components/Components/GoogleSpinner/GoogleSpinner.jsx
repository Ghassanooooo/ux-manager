import React, { Component } from 'react';
import './GoogleSpinner.less';

export class GoogleSpinner extends Component {
    render() {
        return (
            <div className="GoogleSpinner">
                <div id="square5">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }
}

export default GoogleSpinner;
