import React from 'react';
import './TemplateProductsD.less';
import HorizontalCard from '../Components/Cards/HorizontalCard/HorizontalCard';
import { Item } from 'semantic-ui-react';
import PaginationComponent from '../Components/Pagination/Pagination';
import data from '../../data/supplementData/supplementData';

const SupplementsGroup = () => {
    return (
        <div className="container SupplementsGroup">
            <Item.Group divided>
                {data.map(item => (
                    <HorizontalCard key={item._id} data={item} />
                ))}
            </Item.Group>
            <PaginationComponent />
        </div>
    );
};

export default SupplementsGroup;
