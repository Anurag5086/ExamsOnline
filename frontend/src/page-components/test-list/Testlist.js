import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

export default function Testlist() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const getTests = async () => {
      await axios
        .get("http://localhost:5000/api/test/gettests")
        .then((res) => setTests(res.data.tests));
    };
    getTests();
  }, []);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {tests.map((test) => (
        <>
          <ListItem
            alignItems="flex-start"
            onClick={() => {
              window.location.href = `/test/${test.testId}`;
            }}
          >
            <ListItemText
              primary={test.testtitle}
              secondary={
                <React.Fragment>{test.testdescription}</React.Fragment>
              }
            />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
}
