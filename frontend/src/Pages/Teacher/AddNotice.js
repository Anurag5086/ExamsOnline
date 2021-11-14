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

export default function AddNotice() {
  const [noticeTitle, setNoticeTitle] = useState();
  const [noticeDescription, setNoticeDescription] = useState();
  const [noticeSubject, setNoticeSubject] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post("/api/test/createtest", {
    //     testtitle: testTitle,
    //     testsubject: testSubject,
    //     testdescription: testDescription,
    //     starttime: startvalue,
    //     endtime: endvalue,
    //   })
    //   .then((res) => console.log(res.data));
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
            Create Notice
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Notice Title"
                  name="title"
                  onChange={(e) => setNoticeTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={5}
                  id="description"
                  label="Notice Description"
                  name="description"
                  onChange={(e) => setNoticeDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  onChange={(e) => setNoticeSubject(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Create Notice
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
