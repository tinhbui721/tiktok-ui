import { HeaderOnly } from '../components/Layout';
import routesConfig from '../config/routes';
import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import ProfilePage from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

const publicRoutes = [
    { path: routesConfig.home, component: HomePage },
    { path: routesConfig.following, component: FollowingPage },
    { path: routesConfig.profile, component: ProfilePage },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
