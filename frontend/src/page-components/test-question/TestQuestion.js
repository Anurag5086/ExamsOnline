import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function TestQuestion() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="What is the first step in the creation of collaboration diagram?"
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
                    value="Establishing relations"
                    control={<Radio />}
                    label="Establishing relations"
                  />
                  <FormControlLabel
                    value="Finalizing directed messages"
                    control={<Radio />}
                    label="Finalizing directed messages"
                  />
                  <FormControlLabel
                    value="Setting flow of interactions"
                    control={<Radio />}
                    label="Setting flow of interactions"
                  />
                  <FormControlLabel
                    value="Object Identification"
                    control={<Radio />}
                    label="Object Identification"
                  />
                </RadioGroup>
              </FormControl>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default TestQuestion;
