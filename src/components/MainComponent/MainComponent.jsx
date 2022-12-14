import React from 'react'
import styles from "./MainComponent.module.css"
import { HashLink as Link } from "react-router-hash-link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pdf from "../../static/watersecurity-certificate.pdf"
import { faLocationDot, faCalendarDays, faClock, faDollarSign, faComputer, faGreaterThan } from '@fortawesome/free-solid-svg-icons'



const MainComponent = () => {

    return (
        <>
            <div className={styles.heroImg}>
                <div className={ styles.mainContainer }>                    
                    <div className={styles.titleContainer}>
                        <h1 className={styles.heroTitle}>
                            Proposed certificate in water security
                        </h1>
                    </div>

                    <div className={styles.detailsContainer}>
                        <div style={{
                            margin: "0 30px 0px",
                            textTransform: "uppercase",
                            color: "#444",
                            fontSize: "22px"
                        }}>
                            <h3>Program details</h3>
                        </div>
                        

                        <ul style = {{ listStyle: "none", paddingLeft: "0" }}>
                            <li className = {styles.listGroup}>
                                <div className = {styles.listItem}>
                                    <div style = {{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <p style = {{ marginLeft: "10px" }}>Location:</p>
                                    </div>

                                    <p style = {{ fontFamily: "encode_sans_compressedbold,sans-serif" }}>Online</p>
                                </div>
                            </li>

                            <li className={styles.listGroup}>
                                <div className = { styles.listItem }>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <FontAwesomeIcon icon = {faCalendarDays} />

                                        <p style={{ marginLeft: "10px" }}>Duration:</p>
                                    </div>
                                    <p style={{
                                        fontFamily: "encode_sans_compressedbold,sans-serif"
                                    }}>
                                        9 Months
                                    </p>
                                </div>
                            </li>

                            <li className={styles.listGroup}>
                                <div className = { styles.listItem }>
                                    <div style = {{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <FontAwesomeIcon icon={faClock} />

                                        <p style={{ marginLeft: "10px" }}>Times:</p>
                                    </div>
                                    <p style={{
                                        fontFamily: "encode_sans_compressedbold,sans-serif"
                                    }}>
                                        Days
                                    </p>
                                </div>
                            </li>

                            <li className = { styles.listGroup }>
                                <div className = { styles.listItem }>
                                    <div style = {{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <FontAwesomeIcon icon = {faDollarSign} />

                                        <p style={{ marginLeft: "14px" }}>Cost:</p>
                                    </div>
                                    <p style={{ fontFamily: "encode_sans_compressedbold,sans-serif" }}>TBD</p>
                                </div>
                            </li>
                        </ul>

                        <div style={{ margin: "25px 30px 0", lineHeight: "1.42857" }}>
                            <p style={{
                                fontFamily: "encode_sans_compressedregular,sans-serif",
                                fontSize: "15px",
                                color: "#444",
                                textTransform: "uppercase"
                            }}>Next start date</p>
                            <p style={{
                                fontFamily: "encode_sans_compressedbold,sans-serif",
                                fontSize: "20px",
                                color: "#444",
                                marginTop: "-10px",
                                textTransform: "uppercase"
                            }}>
                                September 2024
                            </p>
                        </div>

                        <div className={styles.programDetails}>
                            {/* <Link to="#sessions" style={{ color: "white", textDecoration: "none" }}>
                                Get Details <span style={{ marginLeft:"5px" }}><FontAwesomeIcon icon={faGreaterThan} /></span>
                            </Link> */}
                            <a href={pdf} style={{ color: "white", textDecoration: "none" }}>Get Details</a>
                        </div>

                        <div className={styles.button}>
                            <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faComputer} /></span> talk to an enrollment coach
                        </div>

                    </div>

                </div>


            </div>

        </>

    )
}

export default MainComponent