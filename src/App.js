import './App.css';
import MainComponent from './components/MainComponent';
import AboutProgram from './components/AboutProgram';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <MainComponent/>
      <AboutProgram/>      
    </div>
    </BrowserRouter>
  );
}

export default App;
