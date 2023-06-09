import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Routes, Route, Link} from 'react-router-dom';

// Shared components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages component
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

function App() {
  return ( 
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
