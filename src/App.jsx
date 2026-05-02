import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutProject from './components/AboutProject'
import VisionMission from './components/VisionMission'
import DataSection from './components/DataSection'
import ProjectTeam from './components/ProjectTeam'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutProject />
      <VisionMission />
      <DataSection />
      <ProjectTeam />
      <Footer />
    </div>
  )
}

export default App
