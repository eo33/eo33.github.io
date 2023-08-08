import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
//import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import React, { useEffect } from "react"

// Shared components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import ProjectSamples from "./components/ProjectSamples/ProjectSamples"
import ProjectSamplesTable from "./components/ProjectSamples/ProjectSamplesTable"

// Pages component
import HomePage from "./pages/HomePage/HomePage"
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage"

function App() {
	return (
		<div className='App'>
			<Navbar />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/projects'>
					<Route index element={<ProjectsPage />}></Route>
					{/*These routes are hardcoded for now because there's only 3 pages*/}
					<Route
						path='web-development'
						element={<ProjectSamples path='web-development' />}
					/>
					<Route
						path='documentation-developer'
						element={<ProjectSamples path='documentation-developer' />}
					/>
					<Route
						path='seo-work'
						element={<ProjectSamplesTable path='seo-work' />}
					/>
				</Route>
			</Routes>

			<Footer />
		</div>
	)
}

export default App
