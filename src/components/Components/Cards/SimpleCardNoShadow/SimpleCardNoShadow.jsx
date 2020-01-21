import React from 'react';
import { Image } from 'semantic-ui-react';

const SimpleCardNoShadow = props => {
    const { image, title, description } = props.data;

    return <Image src={image} />;
};

export default SimpleCardNoShadow;
