import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logOut } from "../../auth/firebase";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 5 }}
          >
            {currentUser && (
              <Typography ml={2}>{currentUser.displayName}</Typography>
            )}
          </IconButton>

          <Box>
            {!currentUser ? (
              <>
                <Button color="inherit" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button color="inherit" onClick={() => navigate("/register")}>
                  Register
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={() => logOut()}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
