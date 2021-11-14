import React from "react";
import { useParams } from "react-router-dom";

function Test() {
  let { testID } = useParams();

  return(
    <div>
      <h1>OOSE CLASS TEST-1</h1>
      <p>15 MCQs, 20 min</p>
       
    </div>
  );
}

export default Test;
