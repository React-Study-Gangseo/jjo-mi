import React from "react";
import styled from "styled-components";
import { DetailMenus } from "./DetailMenus";
import DetailInfo from "./DetailInfo";

const Content = styled.section`
  max-width: 1280px;
  height: 100%;
  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
`;

const ProjectDetail: React.FC = () => {
  // const { id } = useParams<RouteParams>();
  // console.log("params", params, text);

  return (
    <Content>
      <h1 className={"a11y-hidden"}>상품 상세 페이지</h1>
      <DetailInfo />
      <DetailMenus />
    </Content>
  );
};
export default ProjectDetail;
