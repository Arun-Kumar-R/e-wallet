import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { Divider } from "@mui/material";

import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import {
  AUTH_USER,
  BALANCE_AMOUNT,
  TRANSACTION_HISTORY,
} from "../Config/config";
import { Link } from "react-router-dom";

const handleLogOut = () => {
  localStorage.removeItem(AUTH_USER);
  localStorage.removeItem(TRANSACTION_HISTORY);
  localStorage.removeItem(BALANCE_AMOUNT);
  window.location.href = "/signup";
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
    <Link to={"/products"} className="custom-nav-link">
      <ListItemButton>
        <ListItemIcon>
          <AddShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Shopping" />
      </ListItemButton>
    </Link>
    <Link to={"/transaction"} className="custom-nav-link">
      <ListItemButton>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
    </Link>
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
