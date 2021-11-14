import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Navbar from "./Navbar";
import axios from "axios";

// export function BasicDateTimePicker(props) {
//   const [value, setValue] = React.useState(new Date());

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DateTimePicker
//         renderInput={(props) => <TextField {...props} />}
//         label="DateTimePicker"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </LocalizationProvider>
//   );
// }

const theme = createTheme();

export default function CreateTest() {
  const [startvalue, setStartValue] = useState(new Date());
  const [endvalue, setEndValue] = useState(new Date());
  const [testTitle, setTestTitle] = useState();
  const [testDescription, setTestDescription] = useState();
  const [testSubject, setTestSubject] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/test/createtest", {
        testtitle: testTitle,
        testsubject: testSubject,
        testdescription: testDescription,
        starttime: startvalue,
        endtime: endvalue,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <AddCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Test
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Test Title"
                  name="title"
                  onChange={(e) => setTestTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Test Description"
                  name="description"
                  onChange={(e) => setTestDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  onChange={(e) => setTestSubject(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Start Date and Time"
                    value={startvalue}
                    onChange={(newValue) => {
                      setStartValue(newValue);
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="End Date and Time"
                    value={endvalue}
                    onChange={(newValue) => {
                      setEndValue(newValue);
                    }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Create Test
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
