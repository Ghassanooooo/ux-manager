import Loadable from 'react-loadable';
import Loading from '../../../../components/Components/LoadingPage/LoadingPage';
import { Paths } from '../../../../models/PagesPathes/Public/Paths';

const Protein = Loadable({
    loader: () => import('../../../../containers/Pages/Supplements/Protein/Protein'),
    loading: Loading,
});

const ProteinRouter = {
    ProteinRouter: {
        auth: false,
        path: Paths.Protein,
        component: Protein,
    },
};

export default ProteinRouter;
