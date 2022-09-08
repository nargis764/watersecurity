import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import styles from "./CourseDetails.module.css";
import MyContext from '../../context/MyContext';
import { ExternalLink } from 'react-external-link';


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
    }, [id])

    return (
        <>
        <div className={styles.heroImg}>
            <Link to="/" style={{ textAlign:"center", fontSize:"20px", color: "#4b2e83" }}>Go Back</Link>
            <div 
            style={{  
                width:"60%", 
                margin:"50px auto 0", 
                padding:"10px 50px",
                borderRadius:"5px",
                display:"flex", 
                justifyContent:"center", 
                alignItems:"center", 
                // background:"rgb(75, 46, 131,0.6)" }}>
                // background:"rgb(255, 255, 255)" }}
            }}
                >
                        <h1 style={{
                            color: "white",
                            textTransform: "uppercase",
                            fontSize: "50px",
                            wordWrap: "break-word",
                            textAlign:"center",
                            // lineHeight: "500px",
                            textShadow: "0 0 5px rgba(0,0,0,.4)",
                            transitionDelay: "0.4s"
                        }}>
                            {courseDetails?.title}
                        </h1>
                    </div>
        </div>

        {/* <div style={{padding:"10px 10%"}}> */}
        <div className = { styles.requirementsContainer }>
            <div className = { styles.requirements }>

            <h2 className={styles.aboutCourseTitle}>
                            About this Course
                        </h2>
                        <div style={{
                            content: '',
                            width: "30%",
                            height: "8px",
                            overflow: "hidden",
                            background: "url(https://www.pce.uw.edu/assets/images/svg/gold-bar.svg) no-repeat right top",
                            backgroundSize: "766px 8px",
                            marginTop: "-15px",
                            marginBottom: "50px"
                        }}></div>

            {/* <h3 style={{ textTransform:"uppercase", letterSpacing: "1px", fontSize: "22px", color: "#444", fontFamily: "encode_sans_compressedblack,sans-serif" }}>
                Course Title:
            </h3>
            <p style={{ fontFamily: "open_sansregular,sans-serif",
                            color: "#222",
                            marginBottom: "30px",
                            fontSize: "17px",
                            lineHeight: "1.42857" }}>
                {courseDetails?.title}
            </p>

            <h3 style={{ textTransform:"uppercase", letterSpacing: "1px", fontSize: "22px", color: "#444", fontFamily: "encode_sans_compressedblack,sans-serif" }}>
                Description of Course:
            </h3> */}
            <p style={{ 
                fontFamily: "open_sansregular,sans-serif",
                            color: "#222",
                            marginBottom: "30px",
                            fontSize: "17px",
                            lineHeight: "1.42857" }}>
                {courseDetails?.description}
            </p>
            </div>


            <div className = {styles.programOverviewContainer}>
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

                                <div className={styles.shapeLightGray}>
                                </div>
                                <div className={styles.courseContainer}>
                                    <h3 className={styles.courseNumber}>
                                        {info.number}
                                    </h3>
                                    {/* <Link to={`/course/${info.id}`} className={styles.courseTitle}>
                                        {info.title}
                                    </Link> */}
                                    <Link to={info.link} className={styles.courseTitle}>
                                        {info.title}
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


            


            {/* <h3 style={{ textTransform:"uppercase", letterSpacing: "1px", fontSize: "22px", color: "#444", fontFamily: "encode_sans_compressedblack,sans-serif" }}>
                Instructor Bio:
            </h3>
            <p style={{ fontFamily: "open_sansregular,sans-serif",
                            color: "#222",
                            marginBottom: "30px",
                            fontSize: "17px",
                            lineHeight: "1.42857" }}>
                {courseDetails?.instructor} 
            </p> */}

            

        </div>
        </>
    )
}

export default CourseDetails