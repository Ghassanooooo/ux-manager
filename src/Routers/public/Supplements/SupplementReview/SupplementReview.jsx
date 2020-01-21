import Loadable from 'react-loadable';
import Loading from '../../../../components/Components/LoadingPage/LoadingPage';
import { Paths } from '../../../../models/PagesPathes/Public/Paths';

const SupplementReview = Loadable({
    loader: () => import('../../../../containers/Pages/Supplements/SupplementReview/SupplementReview'),
    loading: Loading,
});

const SupplementReviewRouter = {
    SupplementReviewRouter: {
        admin: false,
        auth: false,
        path: Paths.SupplementReview + '/:id',
        component: SupplementReview,
    },
};

export default SupplementReviewRouter;
