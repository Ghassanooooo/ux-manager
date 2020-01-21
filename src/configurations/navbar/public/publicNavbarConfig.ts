import { Navbar } from '../../../models/Navbar/Puplic/Navbar';
import { Paths } from '../../../models/PagesPathes/Public/Paths';
import { Category } from '../../../models/Categories/Categories';
import { supplementsItems, mensItems, womensItems } from './publicNavbarDropdwnConfig';

const publicNavbar: Navbar[] = [
    {
        title: 'supplements',
        key: Category.Supplements,
        affiliate: true,
        nested: true,
        subItems: supplementsItems,
        linkTo: Paths.Supplements,
    },
    {
        title: 'mens',
        key: Category.Mens,
        affiliate: true,
        nested: true,
        subItems: mensItems,
        linkTo: Paths.Mens,
    },
    {
        title: 'womens',
        key: Category.Womens,
        affiliate: true,
        nested: true,
        subItems: womensItems,
        linkTo: Paths.Womens,
    },
    {
        title: 'sarms',
        key: Category.Sarms,
        affiliate: true,
        nested: false,
        linkTo: Paths.Sarms,
    },

    {
        title: 'workout plan',
        key: Category.WorkoutPlan,
        affiliate: false,
        nested: false,
        linkTo: Paths.WorkoutPlan,
    },
    {
        title: 'blogs',
        key: Category.Blogs,
        affiliate: false,
        nested: false,
        linkTo: Paths.Blogs,
    },
    {
        title: 'our community',
        key: Category.OurCommunity,
        affiliate: false,
        nested: false,
        linkTo: Paths.OurCommunity,
    },
];

export default publicNavbar;
