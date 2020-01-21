import Loadable from 'react-loadable';
import Loading from '../../../components/Components/LoadingPage/LoadingPage';
import { Paths } from '../../../models/PagesPathes/Public/Paths';

const Account = Loadable({
    loader: () => import('../../../containers/Pages/Account/Account'),
    loading: Loading,
});

const AccountRouter = {
    AccountRouter: {
        admin: false,
        auth: false,
        path: Paths.Account,
        component: Account,
    },
};

export default AccountRouter;
