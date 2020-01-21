import React from 'react';
import { Templates } from '../../../models/Templates/Templates';
import Template from '../../../template/Template';
const data = [
    {
        _id: 'BUY6Drn9e91uu',
        template: Templates.TemplateProductsG3DB,
    },
    {
        _id: 'BUY6Drn9e1uu',
        template: Templates.TemplateProductsCarousel,
    },
    {
        _id: 'BUY6Drn9e1',
        template: Templates.TemplateProductsD,
    },
    {
        _id: 'gJZoSLkfZV',
        template: Templates.TemplateProductsTabCmx,
    },
    {
        _id: 'gJZoSLkfZV6',
        template: Templates.TemplateFlash,
    },
    {
        _id: 'gJZoSLkfZV6',
        template: Templates.TemplateProductsG4,
    },
    {
        _id: 'gJZoSLkfZV66',
        template: Templates.TemplateProductsG3,
    },
];

const HomePage = () => {
    return data.map(block => <Template block={block} />);
};

export default HomePage;
