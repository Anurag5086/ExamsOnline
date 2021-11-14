import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      await axios
        .get("http://localhost:5000/api/question/getallquestions")
        .then((res) => setQuestions(res.data.questions));
    };
    getQuestions();
  }, []);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {questions.map((question) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={question.title}
              secondary={
                <React.Fragment>
                  {question.description}
                  <ul>
                    <li>{question.option1}</li>
                    <li>{question.option2}</li>
                    <li>{question.option3}</li>
                    <li>{question.option4}</li>
                  </ul>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
}
