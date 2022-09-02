import React from 'react'
import MainComponent from '../MainComponent';
import AboutProgram from '../AboutProgram';
import ParallaxSection from '../ParallaxSection';
import LearningFormat from "../LearningFormat";
import ProgramSessions from '../ProgramSessions';
import MeetTheInstructors from '../MeetTheInstructors';


const Home = () => {
    return (
        <div>
            <MainComponent />
            <AboutProgram />
            <ParallaxSection />
            <LearningFormat />
            {/* <ProgramSessions/>  */}
            <MeetTheInstructors />
        </div>
    )
}

export default Home