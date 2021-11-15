import React from "react";
import Testlist from "../../page-components/test-list/Testlist";
import Navbar from "../Common/Navbar";

function TestList() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Tests</h1>
      <Testlist />
    </div>
  );
}

export default TestList;
