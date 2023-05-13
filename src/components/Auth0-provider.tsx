import React, { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

interface Auth0ProviderWithHistoryProps {
  children: ReactNode;
}

const Auth0ProviderWithHistory: React.FC<Auth0ProviderWithHistoryProps> = ({ children }) => {
  const domain = "dev-nz2cou2pkzu47zvy.us.auth0.com" as string;
  const clientId = "wy5Sxf4NByidKyi4w3DmEhxsxIpFKE35" as string;

  const navigate = useNavigate();
  const location = useLocation();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
