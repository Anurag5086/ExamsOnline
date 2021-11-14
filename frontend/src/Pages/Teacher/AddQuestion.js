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
import { useParams } from "react-router-dom";

const theme = createTheme();

export default function AddQuestion() {
  const [questionTitle, setQuestionTitle] = useState();
  const [questionDescription, setQuestionDescription] = useState();
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [option3, setOption3] = useState();
  const [option4, setOption4] = useState();
  const [correctOption, setCorrectOption] = useState();
  let { testID } = useParams();
  const token = localStorage.getItem("creds").token;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/question/addquestion",
        {
          title: questionTitle,
          description: questionDescription,
          option1,
          option2,
          option3,
          option4,
          correctOption,
          testId: testID,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((res) => {
        window.location.reload();
        alert("Question Successfully added!");
      })
      .catch((e) =>
        alert(
          "Error! Enter the details carefully! All the fields are required!"
        )
      );
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
                  onChange={(e) => setQuestionTitle(e.target.value)}
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
                  onChange={(e) => setQuestionDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option1"
                  label="Option 1"
                  name="option1"
                  onChange={(e) => setOption1(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option2"
                  label="Option 2"
                  name="option2"
                  onChange={(e) => setOption2(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option3"
                  label="Option 3"
                  name="option3"
                  onChange={(e) => setOption3(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option4"
                  label="Option 4"
                  name="option4"
                  onChange={(e) => setOption4(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="correctOption"
                  label="Correct Option"
                  name="correctOption"
                  onChange={(e) => setCorrectOption(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Create Question
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
