import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import AuthLoader from "../Authentication/AuthLoader";
import { LogOut } from "../Authentication/State/userAction";
import Navbar from "./Navbar";
import { useTheme } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import SideBar from "./SideBar";
import { Container } from "@mui/system";

const drawerWidth = 280;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

// const useStyles = makeStyles(theme=>({
//   appBar:{
//      boxShadow:"inherit",
//     // Fix on Mobile
//    // backgroundColor: theme.palette.background.default,
//  },
//    lowToolBar:{
//     paddingTop: "0.8rem",
//     paddingBottom: "0.8rem"
//    },
//  }));

interface LayoutProps {
  children: React.ReactNode;
  window: any;
  userData: {
    authenticated: boolean;
    loading: boolean;
    credentials: object;
  };
  LogOut: Function;
  props: any;
}
function Layout({
  window,
  children,
  userData: { authenticated, loading, credentials },
  LogOut,
}: LayoutProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <SideBar/>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  if (authenticated && !loading && Object.keys(credentials).length > 0) {
    const LogOutUser = () => {
      LogOut();
    };
    const isSticky = true
    const theme = useTheme()
    return (
      <Box sx={{ display: "flex"}}>
        <CssBaseline />
        <AppBar
          color="background"
          position="fixed"
          sx={{
            backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
            backdropFilter: isSticky ? 'blur(10px)' : 'none',
            boxShadow:'none',
            zIndex: theme.zIndex.appBar,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className={classes.lowToolBar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Navbar />
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                transition: 'left 0.3s ease 0s',
                boxSizing: "border-box",
                border:0,
                boxShadow: '0px 3px 3px -2px rgb(95 116 141 / 3%), 0px 2px 6px 0px rgb(95 116 141 / 4%), 0px 1px 12px 0px rgb(95 116 141 / 8%)',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Container>
          {children}
          </Container>
        </Box>
      </Box>
    );
  }
  return (
    <AuthLoader
      loading={loading}
      credentials={credentials}
      authenticated={authenticated}
    />
  );
}

interface StateProps {
  userStates: {
    authenticated: boolean;
    loading: boolean;
    credentials: object;
  };
}
const mapStateToProps = (state: StateProps) => {
  return { userData: state.userStates };
};
export default connect(mapStateToProps, { LogOut })(Layout);