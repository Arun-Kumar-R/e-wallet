import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingBasketOutlined";
import PeopleIcon from "@material-ui/icons/PeopleAltOutlined";
import BarChartIcon from "@material-ui/icons/BarChartOutlined";
import LayersIcon from "@material-ui/icons/LayersClearOutlined";
import AssignmentIcon from "@material-ui/icons/AssignmentIndOutlined";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { Divider } from "@mui/material";

import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import { AUTH_USER } from "../Config/config";
import { Link } from "react-router-dom";

const handleLogOut = () => {
    localStorage.removeItem(AUTH_USER);
};

export const mainListItems = (
    <React.Fragment>
        <Link to={"/"} className="custom-nav-link">
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>
        <ListItemButton>
            <ListItemIcon>
                <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Shopping" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
        </ListItemButton>
        <Link to={"/add-money"} className="custom-nav-link">
            <ListItemButton>
                <ListItemIcon>
                    <AccountBalanceWalletRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Add Money" />
            </ListItemButton>
        </Link>
        <Divider />
        <ListItemButton>
            <ListItemIcon>
                <ExitToAppOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" onClick={handleLogOut} />
        </ListItemButton>
    </React.Fragment>
);
