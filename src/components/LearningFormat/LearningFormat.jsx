import React from 'react'
import { Link } from "react-router-dom";
import styles from "./LearningFormat.module.css";


const LearningFormat = () => {
    return (
        <>
        <div style={{ backgroundColor: "#e8e8e8", padding: "2% 10%", }}>

            <div style={{ marginBottom: "50px" }}>
                <h2 style={{
                    fontFamily: "encode_sans_compressedblack,sans-serif",
                    color: "#4b2e83",
                    fontSize: "40px",                    
                    textTransform:"uppercase",
                    lineHeight: "1"
                }}>
                    Learning Format
                </h2>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",                
                fontFamily: "open_sansregular,sans-serif",
                marginBottom:"60px"
            }}>

                <div style={{ width: "16.67%" }}>
                    <img
                        src="https://pce.azureedge.net/getmedia/857ba27d-d39f-44bc-921f-45d25e98056e/online-rtm.png"
                        width="112px"
                        height="112px"
                        alt="online image" />
                </div>

                {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}> */}
                <div style={{ width:"66.67%", paddingRight:"20%" }}>
                    <h3 style={{ 
                        fontSize: "22px",
                        color: "#444",
                        fontFamily: "encode_sans_compressedblack,sans-serif",
                        textTransform:"uppercase"
                    }}>
                        Online with real-time meetings
                        </h3>
                    <p style={{ 
                        lineHeight: "1.42857", 
                        fontFamily: "open_sansregular,sans-serif",
                        fontSize:"17px",
                        color: "#222", 
                    }}>
                        Fully Online. Fully Asynchronous so anyone from anywhere can sign up. There will be designated office
                        hours for real-time interaction with instructors on a weekly basis.
                        <Link to="/"> Learn More ..</Link>
                    </p>
                </div>    

            </div>
            

        </div>

        <div className={styles.shape}>
            </div>
        </>
        
    )
}

export default LearningFormat