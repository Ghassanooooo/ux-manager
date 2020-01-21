import Loadable from 'react-loadable';
import { Paths } from '../models/PagesPathes/Public/Paths';
import GoogleSpinner from '../components/Components/GoogleSpinner/GoogleSpinner';

const RedirectMiddleware = Loadable({
    loader: () => import('../containers/Pages/RedirectMiddleware/RedirectMiddleware'),
    loading: GoogleSpinner,
});

const RedirectMiddlewareRouter = {
    admin: false,
    auth: false,
    path: Paths.GoogleCallbackToken + ':id',
    component: RedirectMiddleware,
};

export default RedirectMiddlewareRouter;
