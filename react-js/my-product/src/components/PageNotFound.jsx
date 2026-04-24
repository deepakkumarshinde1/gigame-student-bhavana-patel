import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <h2>
      The page you are searching is not available. click on &nbsp;
      <Link to="/">Home</Link> &nbsp;page.
    </h2>
  );
}

export default PageNotFound;
