import React from "react";
import TestQuestion from "../../page-components/test-question/TestQuestion";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";

function Test() {
  let { testID } = useParams();

  return(
    <div>
      <h1>OOSE CLASS TEST-1</h1>
      <h5>15 MCQs, 20 min</h5>
      <TestQuestion />
      <Button>Submit Test</Button>
    </div>
  );
}

export default Test;
