import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Project from "./page/Project";
import ProjectDetail from "./page/ProjectDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <main>
            <Routes>
              <Route path="/" element={<Navigate replace to="/project" />} />
              {/* <Route path="/project/*" element={<Layout />}> */}
              {/* <Route path="" element={<Project/>}/>
              <Route path=":projectId" element={<ProjectDetail text="test 문구입니다! <3"/>}/>
            </Route> */}
            </Routes>
          </main>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
