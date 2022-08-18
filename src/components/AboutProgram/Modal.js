import React from 'react'


const Modal = ({ setIsOpenModal }) => {
    return (

        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(200,200,200)",
            // paddingTop:"5%",
            position: "fixed",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            // overflowY:"scroll",
            alignItems: "center",
            zIndex: "1"
        }}
        >
            <div style={{
                width: "50%",
                height: "500px",
                backgroundColor: "white",
                overflowY: "scroll",
                padding: "10px 40px 0px",
                margin: "auto",
                zIndex: "2"
            }}
            >

                <div style={{ display: "flex", justifyContent: "space-between",  }}>
                    <div>

                        <h2 style={{
                            fontFamily: "encode_sans_compressedblack,sans-serif",
                            color: "#4b2e83",
                            textTransform: "uppercase", fontSize: "40px", fontWeight: "500",
                            color: "#444"
                        }}>Requirements</h2>
                        <div style={{
                            content: '',
                            // display: "block",
                            width: "47%",
                            height: "8px",
                            overflow: "hidden",
                            background: "url(https://www.pce.uw.edu/assets/images/svg/gold-bar.svg) no-repeat right top",
                            backgroundSize: "766px 8px",
                            marginTop: "32px"
                        }}></div>
                    </div>
                    <button style={{
                        // height: "30px",
                        // width: "30px",
                        background:"transparent",
                        fontSize: "25.5px",
    
    
    color: "#000",
    textShadow: "0 1px 0 #fff",
    cursor:"pointer",
    border:"none", 
    opacity:"0.2"
                    }}
                        onClick={() => setIsOpenModal(false)}>
                        X
                    </button>
                </div>

                <div style={{}}>
                    <h3 style={{
                        fontFamily: "encode_sans_compressedblack,sans-serif",
                        color: "#4b2e83",
                        textTransform: "uppercase", fontSize: "22px",
                        color: "#444"
                    }}>Admission requirements</h3>
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
                    <h3 style={{
                        fontFamily: "encode_sans_compressedblack,sans-serif",
                        color: "#4b2e83",
                        textTransform: "uppercase", fontSize: "22px",
                        color: "#444"
                    }}>English proficiency</h3>
                    <p>
                        If English is not your native language, you should have at least intermediate English skills to enroll. To learn more,
                        see English Language Proficiency Requirements - Credit Programs.
                    </p>
                </div>

                <div style={{}}>
                    <h3 style={{
                        fontFamily: "encode_sans_compressedblack,sans-serif",
                        color: "#4b2e83",
                        textTransform: "uppercase", fontSize: "22px",
                        color: "#444"
                    }}>International Students</h3>
                    <p >
                        Because this offering is 100% online, no visa is required and international students are welcome to apply.
                        For more information, see Admission Requirements for International Students.
                    </p>
                </div>

                <div style={{}}>
                    <h3 style={{
                        fontFamily: "encode_sans_compressedblack,sans-serif",
                        color: "#4b2e83",
                        textTransform: "uppercase", fontSize: "22px",
                        color: "#444"
                    }}>Technology requirements</h3>
                </div>

                <ul>
                    <li>Access to a computer with a recent operating system and web browser</li>
                    <li>High-speed internet connection</li>
                    <li>Headset and webcam (recommended)</li>
                </ul>

                <div style={{}}>
                    <h3 style={{
                        fontFamily: "encode_sans_compressedblack,sans-serif",
                        color: "#4b2e83",
                        textTransform: "uppercase", fontSize: "22px",
                        color: "#444"
                    }}>Earning the certificate</h3>
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