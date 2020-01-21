import React from 'react';
import { Card } from 'semantic-ui-react';

const SimpleCard = props => {
    const { image, title, description } = props.data;

    return <Card image={image} header={title && title} description={description && description} />;
};

export default SimpleCard;
