import React from "react";

const IndividualProject = ({ params }: { params: { projectId: string } }) => {
  return <div>Project no. {params.projectId}</div>;
};

export default IndividualProject;
