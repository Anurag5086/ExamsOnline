import React from "react";
import { useParams } from "react-router-dom";

function Test() {
  let { testID } = useParams();

  return <div>{testID}</div>;
}

export default Test;
