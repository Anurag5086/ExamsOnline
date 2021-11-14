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
import Navbar from "./Navbar";
import axios from "axios";

const theme = createTheme();

export default function AddQuestion() {
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
            Add Question
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Question Title"
                  name="title"
                  onChange={(e) => setTestTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  id="description"
                  label="Question Description"
                  name="description"
                  rows={5}
                  onChange={(e) => setTestDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option1"
                  label="Option 1"
                  name="option1"
                  onChange={(e) => setTestSubject(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option2"
                  label="Option 2"
                  name="option2"
                  onChange={(e) => setTestSubject(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option3"
                  label="Option 3"
                  name="option3"
                  onChange={(e) => setTestSubject(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option4"
                  label="Option 4"
                  name="option4"
                  onChange={(e) => setTestSubject(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="correctOption"
                  label="Correct Option"
                  name="correctOption"
                  onChange={(e) => setTestSubject(e.target.value)}
                />
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
