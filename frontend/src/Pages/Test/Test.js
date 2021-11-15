import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";

function Test() {
  let { testID } = useParams();
  const [testQuestions, setTestQuestions] = useState([]);
  const [correctOptions, setCorrectOptions] = useState([]);
  const creds = localStorage.getItem("creds");
  const usertype = JSON.parse(creds).usertype;

  useEffect(() => {
    const getQuestions = async () => {
      await axios
        .get(`http://localhost:5000/api/question/gettestquestions/${testID}`)
        .then((res) => {
          setTestQuestions(res.data.questions);
          let subarray = [];
          for (let i = 0; i < testQuestions.length; i++) {
            subarray.push(false);
          }
          setCorrectOptions(subarray);
        });
    };

    getQuestions();
  }, [testID, testQuestions.length]);

  const checkAnswer = (correct, option, index) => {
    let secondaryArray = correctOptions;

    if (option === correct) {
      secondaryArray[index] = true;
    } else {
      secondaryArray[index] = false;
    }
    setCorrectOptions(secondaryArray);
  };

  const handleSubmit = () => {
    let count = 0;
    for (let i = 0; i < correctOptions.length; i++) {
      if (correctOptions[i] === true) {
        count = count + 1;
      }
    }
    alert("You have scored " + count + " out of " + correctOptions.length);
    window.location.href = "/test";
  };

  const addQuestionBtn = () => {
    window.location.href = `/test/${testID}/addquestion`;
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>OOSE CLASS TEST-1</h1>
      <h3 style={{ textAlign: "center" }}>15 MCQs, 20 min</h3>
      {usertype === "Teacher" ? (
        <>
          <Button
            variant="contained"
            style={{ float: "right", zIndex: "100", marginRight: "40px" }}
            onClick={addQuestionBtn}
          >
            Add Question
          </Button>
        </>
      ) : null}

      <ol>
        {testQuestions.map((question, index) => (
          <>
            <li>
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={question.description}
                    secondary={
                      <React.Fragment>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Options</FormLabel>
                          <RadioGroup
                            aria-label="answer"
                            defaultValue="Establishing relations"
                            name="options"
                          >
                            <FormControlLabel
                              value={question.option1}
                              control={<Radio />}
                              label={question.option1}
                              onClick={() =>
                                checkAnswer(
                                  question.correctOption,
                                  question.option1,
                                  index
                                )
                              }
                            />
                            <FormControlLabel
                              value={question.option2}
                              control={<Radio />}
                              label={question.option2}
                              onClick={() =>
                                checkAnswer(
                                  question.correctOption,
                                  question.option2,
                                  index
                                )
                              }
                            />
                            <FormControlLabel
                              value={question.option3}
                              control={<Radio />}
                              label={question.option3}
                              onClick={() =>
                                checkAnswer(
                                  question.correctOption,
                                  question.option3,
                                  index
                                )
                              }
                            />
                            <FormControlLabel
                              value={question.option4}
                              control={<Radio />}
                              label={question.option4}
                              onClick={() =>
                                checkAnswer(
                                  question.correctOption,
                                  question.option4,
                                  index
                                )
                              }
                            />
                          </RadioGroup>
                        </FormControl>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </li>
          </>
        ))}
      </ol>
      {usertype === "Teacher" ? null : (
        <>
          <Button
            variant="contained"
            style={{ display: "flex", margin: "auto", marginBottom: "40px" }}
            onClick={handleSubmit}
          >
            Submit Test
          </Button>
        </>
      )}
    </div>
  );
}

export default Test;
