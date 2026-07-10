import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectContext from './components/ProjectContext'
import AboutProject from './components/AboutProject'
import Features from './components/Features'
import VisionMission from './components/VisionMission'
import DataSection from './components/DataSection'
import ProjectTeam from './components/ProjectTeam'
import ENoseSection from './components/ENoseSection'
import ConfidentialResultsSection from './components/ConfidentialResultsSection'
import ToolsTech from './components/ToolsTech'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ProjectContext />
      <VisionMission />
      <AboutProject />
      <Features />
      <ENoseSection />
      <ConfidentialResultsSection />
      <DataSection />
      <ProjectTeam />
      <ToolsTech />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App

