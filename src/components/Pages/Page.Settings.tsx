import { IconButton } from "@mui/material";
import {Settings, MonitorHeartOutlined, NearMe, MicRounded} from "@mui/icons-material";
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function SettingsPage(){
    return (
        <div className="page">
            <List>
                <ListItem className="device" disablePadding>
                    <ListItemButton>
                    <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem className="device" disablePadding>
                    <ListItemButton>
                    <ListItemText primary="Credits" />
                    </ListItemButton>
                </ListItem>
                <ListItem className="device" disablePadding>
                    <ListItemButton>
                    <ListItemText primary="Setup" />
                    </ListItemButton>
                </ListItem>
                <ListItem className="device" disablePadding>
                    <ListItemButton>
                    <ListItemText primary="My Data" />
                    </ListItemButton>
                </ListItem>
                <ListItem className="device" disablePadding>
                    <ListItemButton>
                    <ListItemText primary="Reset Settings" />
                    </ListItemButton>
                </ListItem>
        </List>
        </div>
    )
};

export default SettingsPage;