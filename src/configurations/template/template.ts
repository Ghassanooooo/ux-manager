export interface TemplateProductsG4 {
    template: string;
    key: string;
    single_product: boolean;

    move: boolean;
    options: {
        products_id: [string];
    };
}

export const templateProductsG4: TemplateProductsG4 = {
    template: 'TemplateProductsG4',
    key: 'uuid',

    single_product: false,
    move: false,
    options: {
        products_id: ['here we should insert the prodects id'],
    },
};

// <Grid>
// <Grid.Row>
//     {[1, 2, 3, 4].map(item => (
//         <Grid.Column className="TemplateProductsG4" computer={4} mobile={16} tablet={8}>
//             <SimpleCard data={oneProdect} />
//         </Grid.Column>
//     ))}
// </Grid.Row>
// </Grid>
