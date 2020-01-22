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
                        component: 'component',
                        title: 'fish oil',
                        description: 'some description',
                        // in the backend we pull the product by populate we pull just a bit info (id, desc, title, img)
                        product: 'product id (tz8888889999okmhgvbn)',
                    },
                ],
            },
            {
                id: uuid(),
                name: 'table temp',
                template: 'TemplateFlash',
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
            const dragCard = clonePages.options[dragIndex]
            const dragTarget = clonePages.options[hoverIndex]
            console.log(dragTarget,' dragCard ==> ',dragCard)
           clonePages.options.splice(hoverIndex, 1, dragCard)
           clonePages.options.splice(dragIndex, 1, dragTarget)
           setPages(clonePages)
            console.log(' ===> clonePages ===>',clonePages)
        },
        [pages],
    );

    const findCard = (id: string) => {
        const card = pages.options.filter(c => `${c.id}` === id)[0]
        return {
          card,
          index: pages.options.indexOf(card),
        }
      }

    const insertCard = (key: any) => {
 
        const clonePages = JSON.parse(JSON.stringify(pages));
        clonePages.options.push({
            id: uuid(),
            name: 'table temp',
            template: key.name,
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
        });
        setPages(clonePages);
    };
console.log('state ===========>>>>>>  ', pages)
    return {
        currentTemplate,
        pages,
        moveCard,
        insertCard,
    };
};

export default AppService;
