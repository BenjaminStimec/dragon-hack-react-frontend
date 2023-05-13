import { Route, Routes } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Footer from './Footer';
import ControlPage from './Page.Control';
import MonitoringPage from './Page.Monitoring';
import SusPage from './Page.Sustainability';
import SettingsPage from './Page.Settings';
import SetPage from './Page.Setup';
import GuardedRoute from './GuardedRoute';
import { HOME_ROUTE, MONITORING_ROUTE, SUS_ROUTE, SETTINGS_ROUTE, LOGIN_ROUTE } from './settings';


function AppRoutes(): JSX.Element {
    const { isAuthenticated } = useAuth0();
    return (

        <Routes>
            <Auth0Provider
                domain="dev-nz2cou2pkzu47zvy.us.auth0.com"
                clientId="wy5Sxf4NByidKyi4w3DmEhxsxIpFKE35"
                authorizationParams={{
                    redirect_uri: window.location.origin
                }}
            >
                <Route element={<GuardedRoute
                    isRouteAccessible={!isAuthenticated}
                    redirectRoute={HOME_ROUTE}
                />}>
                    <Route path={LOGIN_ROUTE} element={<SetPage />} />
                </Route>
                <Route element={<GuardedRoute
                    isRouteAccessible={isAuthenticated}
                    redirectRoute={LOGIN_ROUTE}
                />}>
                    <Route path={HOME_ROUTE} element={<ControlPage />} />
                    <Route path={MONITORING_ROUTE} element={<MonitoringPage />} />
                    <Route path={SUS_ROUTE} element={<SusPage />} />
                    <Route path={SETTINGS_ROUTE} element={<SettingsPage />} />
                </Route>
            </Auth0Provider>
        </Routes>

    );
};

export default AppRoutes;