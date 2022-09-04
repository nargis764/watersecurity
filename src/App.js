import './App.css'; 
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import GetRequirements from "./components/GetRequirements";
import CourseDetails from './components/AboutProgram/CourseDetails';
import MyContext from "./context/MyContext";


const App = () => {

  const [courseData, setCourseData] = useState(() => {
    const courselist = localStorage.getItem('data')
    return courselist ? JSON.parse(courselist) : []});

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ courseData, setCourseData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requirements" element={<GetRequirements />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </MyContext.Provider>

    </BrowserRouter>
  );
}

export default App;
