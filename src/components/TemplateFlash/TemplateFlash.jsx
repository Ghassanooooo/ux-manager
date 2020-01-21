import React from 'react';
import { Grid, GridColumn, Image } from 'semantic-ui-react';
import './TemplateFlash.less';

const TemplateFlash = () => {
    return (
        <Grid className="TemplateFlashImg">
            <Image
                className="TemplateFlash"
                src="https://www.bodybuilding.com/images/merchandising/november-2019/11-24-cyber-week-updated-525x420.jpg"
                alt=""
            />
        </Grid>
    );
};

export default TemplateFlash;
