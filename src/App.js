import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Routes, Route, Link} from 'react-router-dom';

// Shared components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProjectSamples from './components/ProjectSamples/ProjectSamples';
import ProjectSamplesTable from './components/ProjectSamples/ProjectSamplesTable';

// Pages component
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

function App() {
  return ( 
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Projects" >
          <Route index element={<ProjectsPage/>}></Route>
          {/*These routes are hardcoded for now because there's only 3 pages*/}
          <Route path="web-development" element={<ProjectSamples path="web-development"/>}/>
          <Route path="technical-writing" element={<ProjectSamples path="technical-writing"/>}/>
          <Route path="seo-work" element={<ProjectSamplesTable path="seo-work"/>}/>

        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
