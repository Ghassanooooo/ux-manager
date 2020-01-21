import Loadable from 'react-loadable';
import Loading from '../../../components/Components/LoadingPage/LoadingPage';
import { Paths } from '../../../models/PagesPathes/Admin/Paths';

const AdminAddNewProduct = Loadable({
    loader: () => import('../../../containers/AdminPages/AdminAddNewProduct/AdminAddNewProduct'),
    loading: Loading,
});

const AdminAddNewProductRouter = {
    AdminAddNewProductRouter: {
        admin: true,
        auth: true,
        path: Paths.AdminAddNewProductRouter,
        component: AdminAddNewProduct,
    },
};

export default AdminAddNewProductRouter;
