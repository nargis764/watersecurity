import React from 'react'
import { Link } from "react-router-dom";
import styles from "./LearningFormat.module.css";


const LearningFormat = () => {
    return (
        <>
        <div style = {{ backgroundColor: "#e8e8e8", padding: "2% 10%", }}>

            <div style = {{ marginBottom: "50px" }}>
                <h2 className = { styles.learningFormatHeading }>
                    Learning Format
                </h2>
            </div>

            <div className = { styles.learningFormat }>

                <div className = { styles.learningFormatImageContainer }>
                    <img
                        src = "https://pce.azureedge.net/getmedia/857ba27d-d39f-44bc-921f-45d25e98056e/online-rtm.png"
                        width = "112px"
                        height = "112px"
                        alt="online image" />
                </div>

                {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}> */}
                <div className = { styles.learningFormatTextContainer }>
                    <h3 className = { styles.learningFormatTextTitle }>
                        Online with real-time meetings
                        </h3>
                    <p className = { styles.learningFormatTextDescription }>
                        Fully Online. Fully Asynchronous so anyone from anywhere can sign up. There will be designated office
                        hours for real-time interaction with instructors on a weekly basis.                        
                    </p>
                </div>    

            </div>
            

        </div>

        {/* <div className={styles.shape}>
            </div> */}
        </>
        
    )
}

export default LearningFormat