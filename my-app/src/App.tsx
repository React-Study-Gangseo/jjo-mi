import React from 'react';
import {Navigate, Route, Routes, BrowserRouter} from 'react-router-dom';
import Layout from './component/layout/Layout';
import Project from './srceens/Project';
import ProjectDetail from './srceens/ProjectDetail';

function App() {
  return (
    <Layout>

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/project"/>}/>
            {/* <Route path="/project/*" element={<Layout />}> */}
              {/* <Route path="" element={<Project/>}/>
              <Route path=":projectId" element={<ProjectDetail text="test 문구입니다! <3"/>}/>
            </Route> */}
          </Routes>
        </BrowserRouter>
      </main>
    </Layout>
  );
}

export default App;
