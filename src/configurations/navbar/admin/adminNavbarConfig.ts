import { Paths } from '../../../models/PagesPathes/Admin/Paths';

const vitaminsAndHealth = [
    {
        title: 'multivitamins',
        linkTo: Paths.AdminMultivitamins,
    },
    {
        title: 'fish oil',

        linkTo: Paths.AdminFishOil,
    },
];

const weightManagement = [
    {
        title: 'fat burners',

        linkTo: Paths.AdminFatBurners,
    },
    {
        title: 'L-Carnitine',

        linkTo: Paths.AdminLCarnitine,
    },
];
const performance = [
    {
        title: 'pre workout',

        linkTo: Paths.AdminPreWorkout,
    },
    {
        title: 'post workout recovery',

        linkTo: Paths.AdminPostWorkoutRecovery,
    },
];

const protein = [
    {
        title: 'whey protein',

        linkTo: Paths.AdminWheyProtein,
    },
    {
        title: 'Casein protein',

        linkTo: Paths.AdminCaseinProtein,
    },
];
export const supplements = [
    {
        title: 'protein',

        nested: true,
        sub: protein,
        linkTo: Paths.AdminProtein,
    },
    {
        title: 'performance',

        nested: true,
        sub: performance,
        linkTo: Paths.AdminPerformance,
    },
    {
        title: 'weight management',

        nested: true,
        sub: weightManagement,
        linkTo: Paths.AdminWeightManagement,
    },
    {
        title: 'vitamins and health',

        nested: true,
        sub: vitaminsAndHealth,
        linkTo: Paths.AdminVitaminsAndHealth,
    },
];

const navbar = [
    {
        title: 'supplements',

        affiliate: true,
        nested: true,
        sub: supplements,
        linkTo: Paths.AdminSupplements,
    },
    {
        title: 'sarms',

        affiliate: true,
        nested: false,
        linkTo: Paths.AdminSarms,
    },
    {
        title: 'fashion',

        affiliate: true,
        nested: false,
        linkTo: Paths.AdminFashion,
    },
    {
        title: 'workout plan',

        affiliate: false,
        nested: false,
        linkTo: Paths.AdminWorkoutPlan,
    },
    {
        title: 'blogs',

        affiliate: false,
        nested: false,
        linkTo: Paths.AdminBlogs,
    },
    {
        title: 'our community',

        affiliate: false,
        nested: false,
        linkTo: Paths.AdminOurCommunity,
    },
];

export default navbar;
