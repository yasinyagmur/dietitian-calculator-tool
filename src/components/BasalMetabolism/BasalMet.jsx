import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import { useContext } from "react";
import { CalculateContext } from "../../context/Calculate";
import FormControlLabel from "@mui/material/FormControlLabel";

const BasalMet = () => {
  const {
    // setFirstName,
    // setLastName,
    setAge,
    setWeight,
    setHeight,
    bmıCal,
    setValue,
    value,
    setSendBasal,
    basalConc,
  } = useContext(CalculateContext);
  console.log(basalConc);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendBasal(true);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography
        variant="h4"
        sx={{
          marginTop: "1rem",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Basal Metabolism
      </Typography>

      {/* <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      <Grid item>
        <TextField
          name="firstName"
          required
          id="firstName"
          sx={{ marginTop: "1rem", width: "13rem" }}
          size="small"
          label="First Name"
          autoFocus
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          required
          sx={{ marginTop: "1rem", width: "13rem" }}
          id="lastName"
          label="Last Name"
          name="lastName"
          size="small"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Grid>
    </Grid> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <TextField
          required
          id="age"
          label="Age"
          size="small"
          name="age"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          sx={{ marginTop: "1rem", width: "13rem" }}
          onChange={(e) => setAge(e.target.value)}
        />

        <TextField
          required
          label="Please Enter Your Weight"
          id="outlined-start-adornment"
          sx={{ marginTop: "1rem", width: "13rem" }}
          size="small"
          onChange={(e) => setWeight(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
        <TextField
          required
          label="Please Enter Your Height"
          id="outlined-start-adornment"
          sx={{ marginTop: "1rem", width: "13rem" }}
          size="small"
          onChange={(e) => setHeight(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">cm</InputAdornment>
            ),
          }}
          helperText="Please enter in centimetres"
        />
        <Typography sx={{ marginTop: "1rem" }}>
          Body Mass Index : {bmıCal}
        </Typography>
        <Typography sx={{ marginTop: "1rem" }}>
          Basal Metabolism : {basalConc}
        </Typography>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 1.3, width: "7rem" }}
        >
          <CalculateOutlinedIcon />
          Calculate
        </Button>
      </Box>
    </Box>
  );
};

export default BasalMet;
