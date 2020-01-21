import React from 'react';

import './LoadingPage.css';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
const LoadingPage = () => {
    return (
        <Segment className="LoadingPage">
            <Dimmer active inverted>
                <Loader size="large">Loading</Loader>
            </Dimmer>
        </Segment>
    );
};

export default LoadingPage;
