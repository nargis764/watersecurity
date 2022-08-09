import React from 'react'
import styles from "./MainComponent.module.css"
import {Link} from "react-router-dom"


const MainComponent = () => {
    return (
        <>
        <div className={styles.heroImg}>   

        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div >
                <h1 style={{color:"white", textTransform:"uppercase", fontSize:"48px"}}>
                    Proposed certificate in water security
                </h1>
            </div>
            
            <div className={styles.detailsContainer}>
                <div>
                    <h3>Program details</h3> 
                </div>
            
            <ul style={{listStyle:"none"}}>
                <li className={styles.listGroup}>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Location</p>
                        <p>Online</p>
                    </div>
                </li>

                <li className={styles.listGroup}>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Duration</p>
                        <p>9 Months</p>
                    </div>
                </li>

                <li className={styles.listGroup}>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Times</p>
                        <p>Days</p>
                    </div>
                </li>

                <li className={styles.listGroup}>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Cost</p>
                        <p>$6,000</p>
                    </div>
                </li>
            </ul>
            <p>Next start date</p>   
            <p>September 2024</p>
            <div> 
                <Link to="/">Get Details</Link>
            </div>  
            <button style={{textTransform:"uppercase", cursor:"pointer"}}>
                talk to an enrollment coach
            </button> 
        </div>    
        
        </div>

        
        </div>
        
        </>

    )
}

export default MainComponent