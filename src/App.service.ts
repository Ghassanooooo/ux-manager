import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';
import uuid from 'uuid';

const AppService = () => {
    const [currentTemplate, setCurrentTemplate] = useState('TemplateProductsCarousel');
    const [pages, setPages] = useState({
        id: uuid(),
        name: 'home page',
        page: 'home',
        title: 'fish oil',
        description: 'some description',
        options: [
            {
                id: uuid(),
                name: 'table temp',
                template: 'TemplateProductsCarousel',
                title: 'fish oil',
                description: 'some description',
                options: [
                    {
                        id: uuid(),
                        name: 'table temp',
                        component: 'TableComponent',
                        title: 'fish oil',
                        description: 'some description',
                        // in the backend we pull the product by populate we pull just a bit info (id, desc, title, img)
                        product: 'product id (tz8888889999okmhgvbn)',
                    },
                ],
            },
        ],
    });

    const moveCard = useCallback(
        (dragIndex: any, hoverIndex: any) => {
            console.log();
            const clonePages = JSON.parse(JSON.stringify(pages));
            const pagesOptions = JSON.parse(JSON.stringify(clonePages.options));
            const dragCard = JSON.parse(JSON.stringify(pagesOptions[dragIndex]));
            setPages(
                update(pagesOptions, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                }),
            );
        },
        [pages],
    );

    const insertCard = (key: any) => {
        console.log('insertCard <== ==> ', key);
        const clonePages = JSON.parse(JSON.stringify(pages));
        clonePages.options.push({
            id: uuid(),
            name: 'table temp',
            template: key.name,
            title: 'fish oil',
            description: 'some description',
            options: [],
        });
        setPages(clonePages);
        console.log('insertCard ==>', key);
    };

    return {
        currentTemplate,
        pages,
        moveCard,
        insertCard,
    };
};

export default AppService;
