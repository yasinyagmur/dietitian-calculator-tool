import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { CalculateContext } from "../../context/Calculate";

const BMI = () => {
  const {
    // setFirstName,
    // setLastName,
    setAge,
    setWeight,
    setHeight,
    bmıCal,
    setSend,
  } = useContext(CalculateContext);

  // console.log(bmıCal);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);
    e.target.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Container
        sx={{
          border: "1px solid grey",
          width: "50%",
          minHeight: "50vh",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginTop: "1rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Body Mass Index
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
          <Typography sx={{ marginTop: "1rem" }}>BMI : {bmıCal}</Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 1.3, width: "7rem" }}
          >
            Send
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BMI;
