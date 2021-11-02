import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appRoot: {
    display: "flex",
  },
  navigationLogo: {
    width: "50%",
    cursor: "pointer",
  },
  navigationLogoCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.spacing(6),
  },
  navigationDrawer: {
    width: 240,
    border: "none",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    position: "relative",
    height: "100vh",
  },
  navigationDrawerCollapse: {
    width: theme.spacing(9),
  },
  menuItemIcon: {
    width: "100%",
  },
  menuItem: {
    width: "80%",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  menuItemActive: {
    backgroundColor: "#EBEBEC",
  },
  navigationList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  navigationSpacer: {
    flex: 1,
  },
  navigationToolBar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(1),
    ...theme.mixins.toolbar,
  },
  navigationToolBarCollapse: {
    justifyContent: "center",
    paddingRight: 0,
  },
}));
