import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  id: string;
}

const ProjectDetail: React.FC = (): JSX.Element => {
  // const { id } = useParams<RouteParams>();
  // console.log("params", params, text);
  return (
    <div>
      <h2>product detail 페이지</h2>
      <p>text</p>
    </div>
  );
};
export default ProjectDetail;
