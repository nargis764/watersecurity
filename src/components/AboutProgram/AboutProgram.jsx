import React, { useEffect, useContext } from 'react';
import axios from "axios";
import { Link, useNavigate, NavLink } from "react-router-dom";
import styles from "./AboutProgram.module.css"
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import MyContext from "../../context/MyContext";



const AboutProgram = ({ courseData, setCourseData }) => {

    const context = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('course.json')
            .then((res) => {
                console.log(res.data);
                context.setCourseData(res.data);
                context.courseData && localStorage.setItem("data", JSON.stringify(context.courseData));
            })
            .catch((err) => console.log(err))
    }, [])



    return (
        <>

            <div className={ styles.aboutProgram }>

                <div className={ styles.aboutProgramContainer }>
                    <div>
                        <h2 className={ styles.aboutProgramTitle }>
                            About this program
                        </h2>

                        <div className={ styles.goldBar }></div>

                        <p className = { styles.aboutProgramParagraph }>
                            Water, like many other natural resources, requires an up to date and broad-based understanding of
                            current and emerging challenges due to, but not limited to, climate change, infrastructure design and
                            safety, social justice, geo-politics and public health.
                        </p>

                        <p className = { styles.aboutProgramParagraph }>
                            This online certificate program in Water Security aims to improve literacy required to understand,
                            communicate and mitigate water security challenges that demand such broach-based attention.
                        </p>

                    </div>

                    <div style={{}}>
                        <h3 style={{
                            fontFamily: "encode_sans_compressedblack,sans-serif",
                            textTransform: "uppercase",
                            color: "#444"
                        }}>
                            Designed for
                        </h3>

                        <p className = { styles.aboutProgramParagraph }>
                            Professionals with undergrad degrees in engineering, such as civil and environmental, mechanical,
                            chemical, aerospace engineering; and science fields such as geoscience, earth and environmental sciences,
                            atmospheric science, physics, and biology, liberal arts such as law, policy, economics, urban/landscape
                            planning.
                        </p>


                        <button className={styles.requirementsButton}
                            onClick={() => navigate("/requirements")}>
                            <span style={{ marginRight: "5px" }}>See Requirements</span>
                            <FontAwesomeIcon icon={faGreaterThan} />
                        </button>
                    </div>


                    <div>
                        <h3 style = {{
                            fontFamily: "encode_sans_compressedblack,sans-serif",
                            textTransform: "uppercase",
                            color: "#444"
                        }}
                        >
                            What you'll learn
                        </h3>

                        <ul style = {{
                            fontFamily: "open_sansregular,sans-serif",
                            color: "#222",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",

                        }}>
                            <li style={{ lineHeight: "1.42857" }}>
                                Apply basic concepts of remote sensing and data to identify and characterize social justice issues
                                in water resources
                            </li>

                            <li style={{ lineHeight: "1.42857" }}>
                                Re-evaluate water infrastructure safety in a changing climate using modern methods
                            </li>

                            <li style={{ lineHeight: "1.42857" }}>
                                Develop an understanding of how public water system planning, design, and operation
                                relates to the topic of water security
                            </li>

                            <li style={{ lineHeight: "1.42857" }}>
                                Understand the connections between water security and public health
                            </li>

                            <li style={{ lineHeight: "1.42857" }}>
                                Develop scientific visualization and coding skills and understand the role of geopolitics in water
                                security.
                            </li>

                        </ul>

                    </div>

                </div>


                <div className={
                    styles.programOverviewContainer
                }>
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

                        <div className={ styles.shapeGray }>
                        </div>

                        <div className = { styles.certificateContainer }>

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
            {/* } */}
            {/* <Modal/> */}
        </>
    )
}

export default AboutProgram