import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {Settings, MonitorHeart, EnergySavingsLeaf, MicRounded} from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { HOME_ROUTE, MONITORING_ROUTE, SUS_ROUTE, SETTINGS_ROUTE } from "./settings";

import React from "react";

function Footer(){
    const [value, setValue] = React.useState(0);
    return (
        <div className="footer">
        <BottomNavigation showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
            <BottomNavigationAction label="Control" icon={<MicRounded />} component={Link} to={HOME_ROUTE} />
            <BottomNavigationAction label="Monitoring" icon={<MonitorHeart />} component={Link} to={MONITORING_ROUTE} />
            <BottomNavigationAction label="Sustainability" icon={<EnergySavingsLeaf />} component={Link} to={SUS_ROUTE} />
            <BottomNavigationAction label="Settings" icon={<Settings />} component={Link} to={SETTINGS_ROUTE} />
        </BottomNavigation>
        </div>
    );
}

export default Footer;

