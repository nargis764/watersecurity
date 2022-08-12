import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import AboutProgram from './components/AboutProgram';
import ParallaxSection from './components/ParallaxSection';
import LearningFormat from "./components/LearningFormat";
import ProgramSessions from './components/ProgramSessions';
import MeetTheInstructors from './components/MeetTheInstructors';


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <MainComponent/>      
      <AboutProgram/> 
      <ParallaxSection/>
      <LearningFormat/>
      <ProgramSessions/> 
      <MeetTheInstructors/>               
    </div>
    </BrowserRouter>
  );
}

export default App;
