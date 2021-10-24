import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';


export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Minor Project"
          secondary={
            <React.Fragment>
              {"Students who have opted for the minor project (SE-303) are required to work in a group of 2 and submit the project latest by 14/11/21."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Minor Project"
          secondary={
            <React.Fragment>
              {"Students who have opted for the minor project (SE-303) are required to work in a group of 2 and submit the project latest by 14/11/21."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Minor Project"
          secondary={
            <React.Fragment>
              {"Students who have opted for the minor project (SE-303) are required to work in a group of 2 and submit the project latest by 14/11/21."}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}