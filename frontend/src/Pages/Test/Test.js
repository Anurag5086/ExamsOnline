import React from "react";
import TestQuestion from "../../page-components/test-question/TestQuestion";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";

function Test() {
  let { testID } = useParams();

  return(
    <div>
      <h1 style={{textAlign: "center"}}>OOSE CLASS TEST-1</h1>
      <h3 style={{textAlign: "center"}}>15 MCQs, 20 min</h3>
      <ol>
      <li>
      <TestQuestion />
      </li>
      </ol>
      <Button variant="contained" style={{display:'flex', margin: 'auto'}}>Submit Test</Button>
    </div>
  );
}

export default Test;
