import React from "react";

// internal
import MenuItem from "./MenuItem";
import { useStyles } from "../styles";
import routes from "../routes";

// assets
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";

// @material-ui
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const toggleNavigation = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Drawer
        classes={{
          paper: clsx(
            classes.navigationDrawer,
            !open && classes.navigationDrawerCollapse
          ),
        }}
        variant="permanent"
        open={open}
      >
        <div
          className={clsx(
            classes.navigationToolBar,
            !open && classes.navigationToolBarCollapse
          )}
        >
          <IconButton onClick={toggleNavigation}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        <div className={classes.navigationLogoContainer}>
          <img
            className={classes.navigationLogo}
            src={open ? Logo1 : Logo2}
            alt="logo"
          ></img>
        </div>
        <List className={classes.navigationList}>
          {routes.map((route, index) => {
            return (
              <React.Fragment>
                {route.path === "/sign-out" && (
                  <div className={classes.navigationSpacer} />
                )}
                <MenuItem
                  label={route.label}
                  icon={route.icon}
                  activeIcon={route.activeIcon}
                  path={route.path}
                />
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
