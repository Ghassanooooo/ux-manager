import React from 'react';
import './TemplateLoading.less';
import { Loader, Dimmer, Segment } from 'semantic-ui-react';

const TemplateLoading = () => (
    <Segment>
        <Dimmer active inverted>
            <Loader size="medium">Loading</Loader>
        </Dimmer>
        <div className="TemplateLoading"></div>
    </Segment>
);

export default TemplateLoading;
