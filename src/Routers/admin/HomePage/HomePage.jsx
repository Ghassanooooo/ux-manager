import Loadable from 'react-loadable';
import Loading from '../../../components/Components/LoadingPage/LoadingPage';
import { Paths } from '../../../models/PagesPathes/Public/Paths';

const HomePage = Loadable({
    loader: () => import('../../../containers/Pages/HomePage/HomePage'),
    loading: Loading,
});

const HomePageRouter = {
    HomePageRouter: {
        auth: false,
        path: Paths.HomePage,
        component: HomePage,
    },
};

export default HomePageRouter;
