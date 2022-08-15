import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BMI from "../components/BodyMassIndex/BMI";
import SettingsAccessibilityTwoToneIcon from "@mui/icons-material/SettingsAccessibilityTwoTone";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { useState } from "react";
import BasalMet from "../components/BasalMetabolism/BasalMet";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [isDoneBmi, setIsDoneBmi] = useState(false);
  const [isDoneBasal, setIsDoneBasal] = useState(false);

  const handleClickCalculateBmi = () => {
    setIsDoneBmi(true);
    setIsDoneBasal(false);
  };
  const handleClickCalculateBasal = () => {
    setIsDoneBasal(true);
    setIsDoneBmi(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        {!open && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <ChevronRightIcon />
          </IconButton>
        )}

        {open && (
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        )}

        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <IconButton onClick={handleClickCalculateBmi}>
            <SettingsAccessibilityTwoToneIcon />
            {open && <Typography variant="h6">Body Mass Index</Typography>}
          </IconButton>
          <IconButton onClick={handleClickCalculateBasal}>
            <SelfImprovementIcon />
            {open && <Typography variant="h6">Basal Metabolism</Typography>}
          </IconButton>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {/* tıklandığında biri false diğeri true ya dönecek handleClick yazılacak */}

        {isDoneBmi && <BMI />}
        {isDoneBasal && <BasalMet />}
      </Box>
    </Box>
  );
}
