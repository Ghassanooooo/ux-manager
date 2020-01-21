import Loadable from 'react-loadable';
import Loading from '../../../components/Components/LoadingPage/LoadingPage';
import { Paths } from '../../../models/PagesPathes/Admin/Paths';
import PerformanceRouter from './Performance/Performance';
import ProteinRouter from './Protein/Protein';
import SupplementReview from './SupplementReview/SupplementReview';

const AdminSupplements = Loadable({
    loader: () => import('../../../containers/AdminPages/AdminSupplements/AdminSupplements'),
    loading: Loading,
});

const AdminSupplementsRouter = {
    ...PerformanceRouter,
    ...SupplementReview,
    ...ProteinRouter,
    AdminSupplementsRouter: {
        admin: true,
        auth: true,
        path: Paths.AdminSupplements,
        component: AdminSupplements,
    },
};

export default AdminSupplementsRouter;
