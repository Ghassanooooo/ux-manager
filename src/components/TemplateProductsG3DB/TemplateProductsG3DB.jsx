import React from 'react';
import './TemplateProductsG3DB.less';
import { Grid, Segment, Header, Button, Image } from 'semantic-ui-react';
import { oneProdect } from '../../data/supplementData/supplementData';

const TemplateProductsG3DB = () => {
    return (
        <Segment vertical>
            <Grid container stackable textAlign="center" columns={3}>
                {[1, 2, 3].map(i => (
                    <Grid.Column>
                        <Image centered circular size="small" src={oneProdect.image} />
                        <Header as="h1">{oneProdect.title}</Header>
                        <p>{oneProdect.description}</p>
                        <Button basic>View details &raquo;</Button>
                    </Grid.Column>
                ))}
            </Grid>
        </Segment>
    );
};

export default TemplateProductsG3DB;
