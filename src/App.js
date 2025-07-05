import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
//import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

// Shared components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProjectSamples from "./components/ProjectSamples/ProjectSamples";
import ProjectSamplesTable from "./components/ProjectSamples/ProjectSamplesTable";

// Pages component
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*These routes are hardcoded for now because there's only 3 pages.
        Also, focused on showing technical writing samples for now.
        <Route path="/projects">
          <Route index element={<ProjectsPage />}></Route>
          <Route
            path="web-development"
            element={<ProjectSamples path="web-development" />}
          />
          <Route
            path="seo-work"
            element={<ProjectSamplesTable path="seo-work" />}
          />
          <Route
            path="technical-writer"
            element={<ProjectSamples path="technical-writer" />}
          />
        </Route>
        */}
        <Route path="/samples">
          <Route index element={<ProjectSamples path="technical-writer" />}></Route>
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
