import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';


export default function QuestionList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Question ID: 101"
          secondary={
            <React.Fragment>
              {"What does a link in collaboration diagram depicts?"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Question ID: 102"
          secondary={
            <React.Fragment>
              {"Which diagrams are used to model behaviour of an operation?"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider  />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Question ID: 103"
          secondary={
            <React.Fragment>
              {"Which class model persistent data?"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider  />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Question ID: 104"
          secondary={
            <React.Fragment>
              {"Which process of the Booch Methodology includes evolution in the form of refinements?"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}