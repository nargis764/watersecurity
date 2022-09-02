import React, { useState, useeffect, useContext, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import styles from "./CourseDetails.module.css";
import MyContext from '../../context/MyContext';

const CourseDetails = ({ courseData }) => {

    const { id } = useParams();
    const context = useContext(MyContext);
    const [courseDetails, setCourseDetails] = useState({});

    useEffect(() => {
        let data = context.courseData.find(course => course.id == id);
        console.log(courseData)
        console.log(id)
        console.log(data)
        setCourseDetails(data);
    }, [])

    return (
        <div style={{}}>
            <h3>
                Course Title:
            </h3>
            <p>
                {courseDetails?.title}
            </p>

            <h3>
                Description of Course:
            </h3>
            <p>
                {courseDetails?.description}
            </p>

            <h3>
                Instructor Bio:
            </h3>
            <p>
                {courseDetails?.instructor} 
            </p>

        </div>
    )
}

export default CourseDetails