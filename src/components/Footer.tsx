import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {Settings, MonitorHeartOutlined, NearMe, MicRounded} from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { HOME_ROUTE, MONITORING_ROUTE, SUS_ROUTE, SETTINGS_ROUTE } from "./settings";

import React from "react";

function Footer(){
    return (
        <div className="footer">
        <BottomNavigation showLabels>
            <BottomNavigationAction label="Control" icon={<MicRounded />} component={Link} to={HOME_ROUTE} />
            <BottomNavigationAction label="Monitoring" icon={<MonitorHeartOutlined />} component={Link} to={MONITORING_ROUTE} />
            <BottomNavigationAction label="Sustainability" icon={<NearMe />} component={Link} to={SUS_ROUTE} />
            <BottomNavigationAction label="Settings" icon={<Settings />} component={Link} to={SETTINGS_ROUTE} />
        </BottomNavigation>
        </div>
    );
}

export default Footer;

