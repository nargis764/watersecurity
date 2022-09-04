import React from "react";
import { Link } from "react-router-dom";
import styles from "./GetRequirements.module.css";


const GetRequirements = () => {
        
    return (        
            <div
                style={{                    
                    backgroundColor: "white",
                    overflowY: "scroll",
                    padding: "10px 10%",
                    margin: "auto"                                  
                }}
            >
                
                    <Link to="/" style={{ textAlign:"center", fontSize:"20px", color: "#4b2e83" }}>Go Back</Link>

                        <h2 className={styles.requirementsTitle}>
                            Requirements
                        </h2>
                        <div style={{
                            content: '',
                            width: "20%",
                            height: "8px",
                            overflow: "hidden",
                            background: "url(https://www.pce.uw.edu/assets/images/svg/gold-bar.svg) no-repeat right top",
                            backgroundSize: "766px 8px",
                            marginTop: "-15px",
                            marginBottom: "50px"
                        }}></div>
                    
            
                

                <div style={{marginBottom:"50px"}}>
                    <h3
                        style={{
                            fontFamily: "encode_sans_compressedblack,sans-serif",
                            color: "#4b2e83",
                            textTransform: "uppercase",
                            fontSize: "22px"                            
                        }}
                    >
                        Admission requirements
                    </h3>
                
                    <p style={{ fontFamily: "open_sansregular,sans-serif",
                            color: "#222",
                            marginBottom: "10px",
                            fontSize: "17px",
                            lineHeight: "1.42857" }}>To apply you need to meet one of the following degree requirements:</p>
                

                <ul style={{ fontFamily: "open_sansregular,sans-serif",
                            color: "#222",
                            marginBottom: "30px",
                            fontSize: "17px",
                            lineHeight: "1.42857" }}>
                    <li>An undergrad degree in engineering, such as civil and environmental, mechanical, chemical, aerospace engineering;</li>
                    <li>An undergraduate degree in a science fields such geoscience, earth and environmental sciences, atmospheric science, 
                        physics, and biology
                    </li>
                    <li>
                        An undergraduate degree in liberal arts such as law, policy, economics, urban/landscape planning.
                    </li>
                </ul>

                </div>

                <div style={{ marginBottom:"50px"}}>
                    <h3
                        style={{
                            fontFamily: "encode_sans_compressedblack,sans-serif",                            
                            textTransform: "uppercase",
                            fontSize: "22px",
                            color: "#444",
                        }}
                    >
                        English proficiency
                    </h3>
                    <p style={{ fontFamily: "open_sansregular,sans-serif",
                            color: "#222",
                            marginBottom: "30px",
                            fontSize: "17px",
                            lineHeight: "1.42857" }}>
                        If English is not your native language, you should have at least
                        intermediate English skills to enroll. To learn more, see English
                        Language Proficiency Requirements - Credit Programs.
                    </p>
                </div>


                <div style={{ marginBottom:"50px"}}>
                    <h3
                        style={{
                            fontFamily: "encode_sans_compressedblack,sans-serif",
                            color: "#4b2e83",
                            textTransform: "uppercase",
                            fontSize: "22px",
                            color: "#444",
                        }}
                    >
                        International Students
                    </h3>
                    <p style={{ fontFamily: "open_sansregular,sans-serif",
                            color: "#222",
                            marginBottom: "30px",
                            fontSize: "17px",
                            lineHeight: "1.42857" }}>
                        Because this offering is 100% online, no visa is required and
                        international students are welcome to apply. For more information,
                        see Admission Requirements for International Students.
                    </p>
                </div>


                <div style={{ marginBottom:"50px"}}>
                    <h3
                        style={{
                            fontFamily: "encode_sans_compressedblack,sans-serif",
                            color: "#4b2e83",
                            textTransform: "uppercase",
                            fontSize: "22px",
                            color: "#444",
                        }}
                    >
                        Technology requirements
                    </h3>
                

                <ul style={{ fontFamily: "open_sansregular,sans-serif",
                            color: "#222",
                            marginBottom: "30px",
                            fontSize: "17px",
                            lineHeight: "1.42857" }}>
                    <li>
                        Access to a computer with a recent operating system and web browser
                    </li>
                    <li>High-speed internet connection</li>
                    <li>Headset and webcam (recommended)</li>
                </ul>

                </div>


                <div style={{ marginBottom:"50px"}}>
                    <h3
                        style={{
                            fontFamily: "encode_sans_compressedblack,sans-serif",
                            color: "#4b2e83",
                            textTransform: "uppercase",
                            fontSize: "22px",
                            color: "#444",
                        }}
                    >
                        Earning the certificate
                    </h3>
                    <p style={{ fontFamily: "open_sansregular,sans-serif",
                            color: "#222",
                            marginBottom: "30px",
                            fontSize: "17px",
                            lineHeight: "1.42857" }}>
                        You earn the certificate by adhering to the program's attendance
                        policy and successfully completing all required courses. For more
                        information, see Earning the Certificate.
                    </p>
                </div>

                
            </div>
        
    );
};

export default GetRequirements;