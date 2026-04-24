import React from "react";
import { useParams } from "react-router-dom";

function ProjectType() {
  let { project_type } = useParams();
  return <div>This is {project_type} page</div>;
}

export default ProjectType;
