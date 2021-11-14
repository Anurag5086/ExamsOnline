import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';


export default function Testlist() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="OOSE CLASS TEST-1"
          secondary={
            <React.Fragment>
              {"15 MCQs, 20 min"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="ADA CLASS TEST-1"
          secondary={
            <React.Fragment>
              {"10 MCQs + 4 Subjective Questions, 60 mins"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider  />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="OOSE MINOR TEST-1"
          secondary={
            <React.Fragment>
              {"10 MCQs, 15 min"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider  />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="MDA MINOR TEST-1"
          secondary={
            <React.Fragment>
              {"20 MCQs, 30 mins"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}