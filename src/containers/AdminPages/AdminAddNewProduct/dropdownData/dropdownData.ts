import { Category, SubCategory, SubSubCategory } from '../../../../models/Categories/Categories';
import uuid from 'uuid/v4';

const dropdown = [
    {
        lable: 'Category',
        name: 'categorie',
        options: [
            { key: uuid(), text: Category.Supplements, value: Category.Supplements },
            { key: uuid(), text: Category.Mens, value: Category.Mens },
            { key: uuid(), text: Category.Womens, value: Category.Womens },
        ],
    },
    {
        lable: 'Sub Category',
        name: 'subCategorie',
        options: [
            { key: uuid(), text: SubCategory.Performance, value: SubCategory.Performance },
            { key: uuid(), text: SubCategory.Protein, value: SubCategory.Protein },
            { key: uuid(), text: SubCategory.WeightManagement, value: SubCategory.WeightManagement },

            { key: uuid(), text: SubCategory.WeightManagement, value: SubCategory.WeightManagement },

            { key: uuid(), text: SubCategory.VitaminsAndHealth, value: SubCategory.VitaminsAndHealth },

            { key: uuid(), text: SubCategory.WomensClothes, value: SubCategory.WomensClothes },
        ],
    },
    {
        lable: 'Sub Sub Category',
        name: 'subSubCategorie',
        options: [
            { key: uuid(), text: SubSubCategory.WheyProtein, value: SubSubCategory.WheyProtein },
            { key: uuid(), text: SubSubCategory.CaseinProtein, value: SubSubCategory.CaseinProtein },
            { key: uuid(), text: SubSubCategory.FatBurners, value: SubSubCategory.FatBurners },
            { key: uuid(), text: SubSubCategory.LCarnitine, value: SubSubCategory.LCarnitine },
            { key: uuid(), text: SubSubCategory.Multivitamins, value: SubSubCategory.Multivitamins },
            { key: uuid(), text: SubSubCategory.FishOil, value: SubSubCategory.FishOil },
        ],
    },
];

export default dropdown;
