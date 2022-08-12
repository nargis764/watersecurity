import React from 'react'
import styles from "./MainComponent.module.css"
import { HashLink as Link } from "react-router-hash-link"



const MainComponent = () => {

    return (
        <>
            <div className={styles.heroImg}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {/* <div style={{ display: "grid", gridTemplateColumns:"repeat(12,1fr)", gridColumnGap:"4rem" }}>
                    <div style={{gridColumn:"1/span 7"}}> */}
                    <div style={{ width: "60%" }}>
                        <h1 style={{ 
                            color: "white", 
                            textTransform: "uppercase", 
                            fontSize: "58px", 
                            lineHeight: "60px",
                            textShadow: "0 0 5px rgba(0,0,0,.4)",
                            transitionDelay: "0.4s" }}>
                            Proposed certificate in water security
                        </h1>
                    </div>

                    <div className={styles.detailsContainer}>
                        <div style={{ 
                            margin: "0 30px 0px", 
                            textTransform:"uppercase", 
                            color: "#444", 
                            fontSize:"22px" }}>
                            <h3>Program details</h3>
                        </div>

                        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                            <li className={styles.listGroup}>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "0 30px",
                                }}>
                                    <p>Location:</p>
                                    <p style={{ fontFamily: "encode_sans_compressedbold,sans-serif" }}>Online</p>
                                </div>
                            </li>

                            <li className={styles.listGroup}>
                                <div style={{ 
                                    display: "flex", 
                                    justifyContent: "space-between", 
                                    padding: "0 30px" 
                                }}>
                                    <p>Duration:</p>
                                    <p style={{ 
                                        fontFamily: "encode_sans_compressedbold,sans-serif" }}>
                                            9 Months
                                    </p>
                                </div>
                            </li>

                            <li className={styles.listGroup}>
                                <div style={{ 
                                    display: "flex", 
                                    justifyContent: "space-between", 
                                    padding: "0 30px" }}>
                                    <p>Times:</p>
                                    <p style={{ 
                                        fontFamily: "encode_sans_compressedbold,sans-serif" }}>
                                            Days
                                    </p>
                                </div>
                            </li>

                            <li className={styles.listGroup}>
                                <div style={{ display: "flex", justifyContent: "space-between", padding: "0 30px" }}>
                                    <p>Cost:</p>
                                    <p style={{ fontFamily: "encode_sans_compressedbold,sans-serif" }}>$6,000</p>
                                </div>
                            </li>
                        </ul>
                        <div style={{ margin: "25px 30px 0",lineHeight: "1.42857" }}>
                            <p style={{ 
                                fontFamily: "encode_sans_compressedregular,sans-serif", 
                                fontSize:"15px",
                                color: "#444",                                
                                textTransform:"uppercase" }}>Next start date</p>
                            <p style={{ 
                                fontFamily: "encode_sans_compressedbold,sans-serif", 
                                fontSize:"20px",
                                color: "#444",
                                marginTop:"-10px",
                                textTransform:"uppercase" }}>
                                    September 2024
                            </p>
                        </div>

                        <div style={{
                            textShadow: "0 -1px 0 rgba(0,0,0,.2)",
                            borderRadius: "0",
                            fontFamily: "encode_sans_compressedbold,sans-serif",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            fontSize: "20px",                            
                            cursor: "pointer",
                            textAlign: "center",
                            backgroundColor: "#4b2e83",
                            padding: "15px 20px",                            
                            color: "white",
                            margin: "0 30px 20px"
                        }}>
                            <Link to="#sessions" style={{ color: "white", textDecoration: "none" }}>Get Details</Link>
                        </div>

                        <button style={{
                            textTransform: "uppercase",
                            fontFamily: "open_sansbold,sans-serif!important",
                            fontSize: "14px",
                            cursor: "pointer",
                            background: "transparent",
                            border: "1px solid #4b2e83",
                            padding: "15px 20px",
                            textAlign: "center",
                            // fontWeight:"bold",
                            color: "#4b2e83",
                            margin: "0 30px 20px"
                        }}>
                            talk to an enrollment coach
                        </button>
                    </div>

                </div>


            </div>

        </>

    )
}

export default MainComponent