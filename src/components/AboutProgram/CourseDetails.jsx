import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link, useLocation } from "react-router-dom";
import styles from "./CourseDetails.module.css";
import MyContext from '../../context/MyContext';
import { ExternalLink } from 'react-external-link';


const CourseDetails = ({ courseData }) => {

    const { id } = useParams();
    const location = useLocation();
    const context = useContext(MyContext);
    const [courseDetails, setCourseDetails] = useState({});

    const { pathname } = location;

    useEffect(() => {
        window.scrollTo({ top: 0 });
        let data = context.courseData.find(course => course.id == id);
        console.log(context.courseData)
        console.log(id)
        console.log(data)
        console.log(pathname)
        setCourseDetails(data);
    }, [id])

    
    return (
        <>
            <div className = {styles.heroImg}>
                <Link to="/" style = {{ textAlign: "center", fontSize: "20px", color: "#4b2e83" }}>Go Back</Link>
                <div
                    className = {styles.courseHeadingContainer}
                >
                    <h1 className = {styles.courseHeading}>
                        {courseDetails?.title}
                    </h1>
                </div>
            </div>

            {/* <div style={{padding:"10px 10%"}}> */}
            <div className = { styles.requirementsContainer }>
                <div className = { styles.requirements }>

                    <h2 className = { styles.aboutCourseTitle }>
                        About this Course
                    </h2>
                    <div className = { styles.goldBar }></div>

                    
                    <p className = { styles.courseDescription }>
                        {courseDetails?.description}
                    </p>
                </div>


                <div className={styles.programOverviewContainer}>
                    <div style={{
                        backgroundColor: "#4b2e83",
                        color: "white",
                        padding: "20px 20px 30px",
                        marginBottom: "30px"
                    }}>
                        <h2 style={{ textTransform: "uppercase" }}>
                            Program Overview
                        </h2>
                        <p>
                            Complete the courses listed below to earn the certificate. You may be able to take individual courses
                            without enrolling in the certificate program; check the course pages for details.
                        </p>
                    </div>


                    {context.courseData.map((info, index) => {
                        return (

                            <div style={{ marginTop: "-30px" }} key={info.id}>

                                <div className={ pathname === `/course/${info.id}`? styles.shapeDarkGray : styles.shapeLightGray }>
                                </div>
                                <div className={ pathname === `/course/${info.id}`? styles.activeCourseContainer : styles.courseContainer }>
                                    <h3 className={ pathname === `/course/${info.id}`? styles.activeCourseNumber : styles.courseNumber }>
                                        { info.number }
                                    </h3>
                                    
                                    <Link to={ info.link } className={ pathname === `/course/${info.id}`? styles.activeCourseTitle : styles.courseTitle }>
                                        { info.title }
                                    </Link>
                                </div>
                            </div>
                        )

                    })}




                    <div style={{ marginTop: "-30px" }}>

                        <div className={styles.shapeGray}>
                        </div>

                        <div style={{
                            backgroundColor: "#d9d9d9",
                            position: "relative",
                            top: "-22px",
                            padding: "30px 20px 54px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "15px"
                        }}>

                            <div>
                                <img src="https://cdn.onlinewebfonts.com/svg/img_454076.png" alt="certificate" width="62" height="54" />
                            </div>

                            <div>

                                <Link to="/" className={styles.certificateTitle}>
                                    Certificate in water security
                                </Link>
                            </div>
                            <div>
                                <p>Developed by the
                                    <ExternalLink href="https://www.ce.washington.edu/"
                                        className={styles.departmentTitle}>
                                        UW Department of Civil and Environmental Engineering
                                    </ExternalLink></p>
                            </div>
                        </div>

                    </div>

                    <div style={{ marginTop: "-20px" }}>

                        <div className={styles.shapeWhite}></div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default CourseDetails