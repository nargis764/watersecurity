import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const GetRequirements = () => {
        

    return (        
            <div
                style={{                    
                    backgroundColor: "white",
                    overflowY: "scroll",
                    padding: "10px 40px 0px",
                    margin: "auto",                    
                }}
            >
                
                    <div>
                        <h2
                            style={{
                                fontFamily: "encode_sans_compressedblack,sans-serif",
                                color: "#4b2e83",
                                textTransform: "uppercase",
                                fontSize: "40px",
                                fontWeight: "500",
                                color: "#444",
                            }}
                        >
                            Requirements
                        </h2>
                        <div
                            style={{
                                content: "",
                                // display: "block",
                                width: "47%",
                                height: "8px",
                                overflow: "hidden",
                                background:
                                    "url(https://www.pce.uw.edu/assets/images/svg/gold-bar.svg) no-repeat right top",
                                backgroundSize: "766px 8px",
                                marginTop: "32px",
                            }}
                        ></div>
                    </div>
                   
                

                <div style={{}}>
                    <h3
                        style={{
                            fontFamily: "encode_sans_compressedblack,sans-serif",
                            color: "#4b2e83",
                            textTransform: "uppercase",
                            fontSize: "22px",
                            color: "#444",
                        }}
                    >
                        Admission requirements
                    </h3>
                </div>

                <div style={{}}>
                    <p>To Apply, you must have</p>
                </div>

                <ul>
                    <li>An undergrad degree in engineering, such as civil and environmental, mechanical, chemical, aerospace engineering;</li>
                    <li>An undergraduate degree in a science fields such geoscience, earth and environmental sciences, atmospheric science, 
                        physics, and biology
                    </li>
                    <li>
                        An undergraduate degree in liberal arts such as law, policy, economics, urban/landscape planning.
                    </li>
                </ul>

                <div style={{}}>
                    <h3
                        style={{
                            fontFamily: "encode_sans_compressedblack,sans-serif",
                            color: "#4b2e83",
                            textTransform: "uppercase",
                            fontSize: "22px",
                            color: "#444",
                        }}
                    >
                        English proficiency
                    </h3>
                    <p>
                        If English is not your native language, you should have at least
                        intermediate English skills to enroll. To learn more, see English
                        Language Proficiency Requirements - Credit Programs.
                    </p>
                </div>

                <div style={{}}>
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
                    <p>
                        Because this offering is 100% online, no visa is required and
                        international students are welcome to apply. For more information,
                        see Admission Requirements for International Students.
                    </p>
                </div>

                <div style={{}}>
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
                </div>

                <ul>
                    <li>
                        Access to a computer with a recent operating system and web browser
                    </li>
                    <li>High-speed internet connection</li>
                    <li>Headset and webcam (recommended)</li>
                </ul>

                <div style={{}}>
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
                    <p>
                        You earn the certificate by adhering to the program's attendance
                        policy and successfully completing all required courses. For more
                        information, see Earning the Certificate.
                    </p>
                </div>

                
            </div>
        
    );
};

export default GetRequirements;