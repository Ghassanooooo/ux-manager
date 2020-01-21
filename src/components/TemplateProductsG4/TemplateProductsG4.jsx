import React from 'react';
import './TemplateProductsG4.less';
import SimpleCard from '../Components/Cards/SimpleCard/SimpleCard';
import { Grid } from 'semantic-ui-react';
import { oneProdect } from '../../data/supplementData/supplementData';

const TemplateProductsG4 = () => {
    return (
        <Grid>
            <Grid.Row>
                {[1, 2, 3, 4].map(item => (
                    <Grid.Column className="TemplateProductsG4" computer={4} mobile={16} tablet={8}>
                        <SimpleCard data={oneProdect} />
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    );
};

export default TemplateProductsG4;
