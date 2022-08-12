import React, { useState } from 'react'
import Modal from './Modal'
import styles from "./AboutProgram.module.css"



const AboutProgram = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            {isOpenModal ? <Modal setIsOpenModal={setIsOpenModal} /> :
                <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    padding: "0 10%", 
                    marginTop: "100px",
                    marginBottom: "80px" }}>


                    <div style={{ width: "60%" }}>
                        <div>
                            <h1 style={{ 
                                textTransform: "uppercase", 
                                color: "#4b2e83", 
                                fontFamily: "encode_sans_compressedblack,sans-serif" }}>
                                About this program
                            </h1>

                            <p style={{
                                fontFamily: "open_sansregular,sans-serif", 
                                color: "#222", 
                                marginBottom: "16px", 
                                fontSize: "17px",
                                lineHeight: "1.42857"
                            }}>
                                “Water, like many other natural resources, requires an up to date and broad-based understanding of
                                current and emerging challenges due to, but not limited to, climate change, infrastructure design and
                                safety, social justice, geo-politics and public health.
                            </p>

                            <p style={{
                                fontFamily: "open_sansregular,sans-serif",
                                color: "#222",
                                marginBottom: "16px",
                                fontSize: "17px",
                                lineHeight: "1.42857"
                            }}>
                                This online certificate program in Water Security aims to improve literacy required to understand,
                                communicate and mitigate water security challenges that demand such broach-based attention.”
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

                            <p style={{
                                fontFamily: "open_sansregular,sans-serif",
                                color: "#222",
                                marginBottom: "16px",
                                fontSize: "17px",
                                lineHeight: "1.42857"
                            }}>
                                Professionals with undergrad degrees in engineering, such as civil and environmental, mechanical,
                                chemical, aerospace engineering; and science fields such as geoscience, earth and environmental sciences,
                                atmospheric science, physics, and biology, liberal arts such as law, policy, economics, urban/landscape
                                planning.
                            </p>
                            <button style={{
                                textShadow: "0 -1px 0 rgba(0,0,0,.2)",
                                borderRadius: "0",
                                fontFamily: "encode_sans_compressedbold,sans-serif",
                                fontWeight:"bold",
                                textTransform: "uppercase",
                                fontSize: "20px",
                                // padding: "10px 16px",
                                cursor:"pointer",
                                textAlign: "center",
                                backgroundColor:"#4b2e83",
                                padding:"15px 20px",
                                marginBottom:"50px",
                                color:"white"}} 
                                onClick={() => setIsOpenModal(true)}>
                                    See Requirements
                            </button>
                        </div>


                        <div>
                            <h3 style={{
                                fontFamily: "encode_sans_compressedblack,sans-serif",
                                textTransform: "uppercase",
                                color: "#444"
                            }}
                            >
                                What you'll learn
                            </h3>

                            <ul style={{
                                fontFamily: "open_sansregular,sans-serif",
                                color: "#222", 
                                display: "flex", 
                                flexDirection: "column", 
                                gap: "5px",
                                
                            }}>
                                <li>
                                    Apply basic concepts of remote sensing and data to identify and characterize social justice issues
                                    in water resources
                                </li>

                                <li>
                                    Re-evaluate water infrastructure safety in a changing climate using modern methods
                                </li>

                                <li>
                                    Develop an understanding of how public water system planning, design, and operation
                                    relates to the topic of water security
                                </li>

                                <li>
                                    Understand the connections between water security and public health
                                </li>

                                <li>
                                    Develop scientific visualization and coding skills and understand the role of geopolitics in water
                                    security.
                                </li>

                            </ul>

                        </div>

                    </div>


                    <div style={{ 
                        width: "30%", 
                    textAlign: "center", 
                    textTransform: "uppercase" }}>
                        <div style={{ 
                            backgroundColor: "#4b2e83", 
                            color: "white", 
                            padding: "20px 20px" }}>
                            <h2>
                                Program Overview
                            </h2>
                            <p>
                                Complete the courses listed below to earn the certificate. You may be able to take individual courses
                                without enrolling in the certificate program; check the course pages for details.
                            </p>
                        </div>

                        {/* <div className={styles.shape}>
                        </div>
                        <div style={{ backgroundColor: "#e8e8e8", color: "white", position: "relative", top: "-22px", padding: "20px 20px" }}>
                            <h3 style={{ color: "#444", fontFamily: "open_sansbold,sans-serif", textTransform: "uppercase" }}>
                                Quarter 1
                            </h3>
                            <p style={{ color: "#4b2e83" }}>
                                Water remote sensing and social justice
                            </p>
                        </div> */}

                        <div style={{}}>

                            <div className={styles.shape}>
                            </div>
                            <div style={{ 
                                backgroundColor: "#e8e8e8", 
                                color: "white", 
                                position: "relative", 
                                top: "-22px", 
                                padding: "20px 20px 30px", 
                                }}>
                                <h3 style={{ 
                                    color: "#444", 
                                fontFamily: "open_sansbold,sans-serif", 
                                textTransform: "uppercase" }}>
                                    CEWA XXX (Fall)
                                </h3>
                                <p style={{ color: "#4b2e83" }}>
                                    Water remote sensing and social justice
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: "-30px" }}>

                            <div className={styles.shape}>
                            </div>

                            <div style={{
                                backgroundColor: "#e8e8e8",
                                color: "white",
                                position: "relative",
                                top: "-22px",
                                padding: "20px 20px 30px"
                            }}>

                                <h3 style={{
                                    color: "#444",
                                    fontFamily: "open_sansbold,sans-serif",
                                    textTransform: "uppercase"
                                }}>
                                    CEWA XXX (Fall)
                                </h3>
                                <p style={{ color: "#4b2e83" }}>
                                    Water and public health
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: "-30px" }}>

                            <div className={styles.shape}>
                            </div>
                            <div style={{
                                backgroundColor: "#e8e8e8",
                                color: "white",
                                position: "relative",
                                top: "-22px",
                                padding: "20px 20px 30px"
                            }}>

                                <h3 style={{
                                    color: "#444",
                                    fontFamily: "open_sansbold,sans-serif",
                                    textTransform: "uppercase"
                                }}>
                                    CEWA XXX (Winter)
                                </h3>
                                <p style={{ color: "#4b2e83" }}>
                                    Water infrastructure safety
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: "-30px" }}>

                            <div className={styles.shape}>
                            </div>
                            <div style={{
                                backgroundColor: "#e8e8e8",
                                color: "white",
                                position: "relative",
                                top: "-22px",
                                padding: "20px 20px 30px"
                            }}>

                                <h3 style={{
                                    color: "#444",
                                    fontFamily: "open_sansbold,sans-serif",
                                    textTransform: "uppercase"
                                }}>
                                    CEWA XXX (Winter)
                                </h3>
                                <p style={{ color: "#4b2e83" }}>
                                    Introduction to scientific visualization and coding
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: "-30px" }}>

                            <div className={styles.shape}>
                            </div>
                            <div style={{
                                backgroundColor: "#e8e8e8",
                                color: "white",
                                position: "relative",
                                top: "-22px",
                                padding: "20px 20px 30px"
                            }}>
                                <h3 style={{
                                    color: "#444", fontFamily: "open_sansbold,sans-serif",
                                    textTransform: "uppercase"
                                }}>
                                    CEWA XXX (Spring)
                                </h3>
                                <p style={{ color: "#4b2e83" }}>
                                    Water security in public water systems
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: "-30px" }}>

                            <div className={styles.shape}>
                            </div>

                            <div style={{ 
                                backgroundColor: "#e8e8e8", 
                                color: "white", 
                                position: "relative", 
                                top: "-22px", 
                                padding: "20px 20px 30px" }}>
                                <h3 style={{ 
                                    color: "#444", 
                                    fontFamily: "open_sansbold,sans-serif", 
                                    textTransform: "uppercase" }}>
                                    CEWA XXX (Spring)
                                </h3>
                                <p style={{ color: "#4b2e83" }}>
                                    Water security and geopolitics
                                </p>
                            </div>
                        </div>



                    </div>




                </div>
            }
            {/* <Modal/> */}
        </>
    )
}

export default AboutProgram