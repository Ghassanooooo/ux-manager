import { DropdownOptions } from '../../../models/Navbar/Puplic/Navbar';

import { Paths } from '../../../models/PagesPathes/Public/Paths';
import { SubCategory } from '../../../models/Categories/Categories';
import {
    proteinItems,
    performanceItems,
    weightManagementItems,
    vitaminsAndHealthItems,
    mensClothesItems,
    womensClothesItems,
    mensAccessoriesItems,
    womensAccessoriesItems,
} from './publicNavbarSubDropdwnConfig';

export const supplementsItems: DropdownOptions[] = [
    {
        title: 'protein',
        key: SubCategory.Protein,
        nested: true,
        subItems: proteinItems,
        linkTo: Paths.Protein,
    },
    {
        title: 'performance',
        key: SubCategory.Performance,
        nested: true,
        subItems: performanceItems,
        linkTo: Paths.Performance,
    },
    {
        title: 'weight management',
        key: SubCategory.WeightManagement,
        nested: true,
        subItems: weightManagementItems,
        linkTo: Paths.WeightManagement,
    },
    {
        title: 'vitamins and health',
        key: SubCategory.VitaminsAndHealth,
        nested: true,
        subItems: vitaminsAndHealthItems,
        linkTo: Paths.VitaminsAndHealth,
    },
];

export const mensItems: DropdownOptions[] = [
    {
        title: 'clothes',
        key: SubCategory.MensClothes,
        nested: true,
        subItems: mensClothesItems,
        linkTo: Paths.MensClothes,
    },
    {
        title: 'accessories',
        key: SubCategory.MensAccessories,
        nested: true,
        subItems: mensAccessoriesItems,
        linkTo: Paths.MensAccessories,
    },
    {
        title: 'sport shoes',
        key: SubCategory.MensSportShose,
        nested: false,
    },
];

export const womensItems: DropdownOptions[] = [
    {
        title: 'clothes',
        key: SubCategory.WomensClothes,
        nested: true,
        subItems: womensClothesItems,
        linkTo: Paths.WomensClothes,
    },
    {
        title: 'accessories',
        key: SubCategory.WomensAccessories,
        nested: true,
        subItems: womensAccessoriesItems,
        linkTo: Paths.WomensAccessories,
    },
    {
        title: 'sport shoes',
        key: SubCategory.WomensSportShose,
        nested: false,
    },
];
