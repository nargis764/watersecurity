import React from 'react'


const Modal = ({setIsOpenModal}) => {
    return (
        
        <div style={{
            width:"100vw", 
            height:"100vh", 
            backgroundColor:"rgba(200,200,200)",  
            // paddingTop:"5%",
            position:"fixed", 
            top:"0", 
            left:"0", 
            display:"flex", 
            justifyContent:"center", 
            // overflowY:"scroll",
            alignItems:"center"            
            }}
        >
            <div style={{
                width:"50%", 
                height:"500px",
                backgroundColor:"white", 
                overflowY:"scroll",
                padding:"10px 40px 0px",
                margin:"auto"}}
            >
                
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>    
                <h1>Requirements</h1>
                <button style={{
                    height:"30px",
                    width:"30px"}}
                    onClick={() => setIsOpenModal(false)}>
                        X
                </button>
                </div>

                <div style={{}}>  
                <h3>Admission requirements</h3>
                </div>

                <div style={{}}>  
                <p>To Apply, you must have</p>
                </div>

                <ul>
                    <li>A bachelor's degree from an accredited college or university</li>
                    <li>Graduate-level knowledge of structural dynamics</li>
                    <li>Professional experience in structural engineering or a related field</li>
                </ul>

                <div style={{}}>    
                <h3>English proficiency</h3>
                <p>
                    If English is not your native language, you should have at least intermediate English skills to enroll. To learn more, 
                    see English Language Proficiency Requirements - Credit Programs.
                </p>
                </div>

                <div style={{}}>    
                <h3>International Students</h3>
                <p>
                    Because this offering is 100% online, no visa is required and international students are welcome to apply. 
                    For more information, see Admission Requirements for International Students.
                </p>
                </div>

                <div style={{}}>  
                <p>Technology requirements</p>
                </div>

                <ul>
                    <li>Access to a computer with a recent operating system and web browser</li>
                    <li>High-speed internet connection</li>
                    <li>Headset and webcam (recommended)</li>
                </ul>

                <div style={{}}>    
                <h1>Earning the certificate</h1>
                <p>
                    You earn the certificate by adhering to the program's attendance policy and successfully completing all required courses. 
                    For more information, see Earning the Certificate.
                </p>
                </div>

            </div>
        </div>
        
    )
}

export default Modal