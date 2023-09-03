import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./page/Home";
import Project from "./page/Project";
import ProjectDetail from "./page/ProjectDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* <Route path="" element={<Project/>}/>
              <Route path=":projectId" element={<ProjectDetail text="test 문구입니다! <3"/>}/>
            </Route> */}
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
