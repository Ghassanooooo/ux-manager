import Loadable from 'react-loadable';
import Loading from '../../../components/Components/LoadingPage/LoadingPage';
import { Paths } from '../../../models/PagesPathes/Public/Paths';
import PerformanceRouter from './Performance/Performance';
import ProteinRouter from './Protein/Protein';
import SupplementReview from './SupplementReview/SupplementReview';

const Supplements = Loadable({
    loader: () => import('../../../containers/Pages/Supplements/Supplements'),
    loading: Loading,
});

const SupplementsRouter = {
    ...PerformanceRouter,
    ...SupplementReview,
    ...ProteinRouter,
    SupplementsRouter: {
        admin: false,
        auth: false,
        path: Paths.Supplements,
        component: Supplements,
    },
};

export default SupplementsRouter;
