import React from 'react';
import './TemplateProductsG3.less';
import SimpleCardNoShadow from '../Components/Cards/SimpleCardNoShadow/SimpleCardNoShadow';
import { Grid } from 'semantic-ui-react';
import { oneProdect } from '../../data/supplementData/supplementData';

const TemplateProductsG3 = () => {
    return (
        <Grid>
            <Grid.Row>
                {[1, 2, 3].map(item => (
                    <Grid.Column className="TemplateProductsG3" computer={5} mobile={16} tablet={5}>
                        <SimpleCardNoShadow data={oneProdect} />
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    );
};

export default TemplateProductsG3;
