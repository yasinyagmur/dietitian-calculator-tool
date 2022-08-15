import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logOut } from "../../auth/firebase";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: "#c3950a",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 5 }}
            onClick={() => navigate("/")}
          >
            <CalculateOutlinedIcon fontSize="large" />
            <Typography variant="h5" ml={2}>
              {" "}
              Dietitian Calculator
            </Typography>
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "1rem", fontWeight: "300" }} mr={2}>
                  {currentUser.displayName}
                </Typography>

                <Button
                  color="inherit"
                  sx={{ fontWeight: "400" }}
                  onClick={() => logOut()}
                >
                  Logout
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
