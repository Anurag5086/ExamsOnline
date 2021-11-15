import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

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

  let handleSubmit = (e) => {
    let option= e.target.value;
    
  }

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {questions.map((question) => (
        <>
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
                      <FormControlLabel value={question.option1} control={<Radio />} label={question.option1} />
                      <FormControlLabel value={question.option2} control={<Radio />} label={question.option2} />
                      <FormControlLabel value={question.option3} control={<Radio />} label={question.option3} />
                      <FormControlLabel value={question.option4} control={<Radio />} label={question.option4} />
                  </RadioGroup>
                  </FormControl>
                  <Button variant="contained" style={{display:'flex', margin: 'auto'}} onSubmit={handleSubmit}>Submit Test</Button>
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
