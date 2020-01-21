import Loadable from 'react-loadable';
import Loading from '../../../../components/Components/LoadingPage/LoadingPage';
import { Paths } from '../../../../models/PagesPathes/Public/Paths';

const Performance = Loadable({
    loader: () => import('../../../../containers/Pages/Supplements/Performance/Performance'),
    loading: Loading,
});

const PerformanceRouter = {
    PerformanceRouter: {
        auth: false,
        path: Paths.Performance,
        component: Performance,
    },
};

export default PerformanceRouter;
