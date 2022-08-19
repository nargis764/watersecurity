import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, EffectFade } from "swiper"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import axios from "axios";
import styles from "./MeetTheInstructors.module.css"


const MeetTheInstructors = () => {


    const [data,setData]=useState([]);
    const [instructorDetails, setInstructorDetails] = useState(data[0]);
    const [clickedOnInst, setClickedOnInst] = useState(null);

    useEffect (() => {
        axios.get('data.json')
        .then((res) => {            
            console.log(res.data);            
            setData(res.data);           
        })
        .catch((err) => console.log(err))
    }, [])

    const handleClick = (e, name, title, bio, image, idFromBelow) => {
        e.preventDefault();
        setInstructorDetails({ name: name, title: title, bio: bio, image: image });
        setClickedOnInst(idFromBelow)
    }

    return (
        <>
            <div style={{
                backgroundColor: "#f0ede3",
                padding: "40px 10% 80px",
                display: "flex",
                justifyContent: "flex-start",
                // alignItems: "center"
            }}>

                <div style={{ width: "45%" }}>

                    <div style={{}}>

                        {
                            clickedOnInst ? (<>
                                <img 
                                className={styles.instrcutorImage}
                                src={instructorDetails.image} />
                            </>) : (<>
                                <img 
                                className={styles.instrcutorImage} 
                                src={data[0]?.image} />
                            </>)

                        }

                    </div>

                </div>
                <div style={{ width: "55%" }}>
                    <h2 style={{
                        fontFamily: "encode_sans_compressedblack,sans-serif",
                        color: "#4b2e83",
                        fontSize: "40px",
                        textTransform: "uppercase",
                        lineHeight: "1"
                    }}>
                        Meet the instructors
                    </h2>


                    {
                        clickedOnInst ? (<>
                            <p style={{
                                fontFamily: "encode_sans_compressedlight,sans-serif",
                                fontSize: "36px",
                                marginTop: "0",
                                color: "#444",
                                textTransform: "uppercase",
                                fontWeight: "500"
                            }}>
                                {instructorDetails.name}
                            </p>
                            <p style={{
                                fontFamily: "open_sansregular,sans-serif",
                                fontSize: "16px", lineHeight: "1.42857", color: "#222", fontWeight: "700"
                            }}>
                                {instructorDetails.title}
                            </p>
                            <p style={{
                                fontFamily: "open_sansregular,sans-serif",
                                fontSize: "16px", lineHeight: "1.42857", color: "#454545"
                            }}>
                                {instructorDetails.bio}
                            </p>
                        </>) : (<>
                            <p style={{
                                fontFamily: "encode_sans_compressedlight,sans-serif",
                                fontSize: "36px",
                                marginTop: "0",
                                color: "#444",
                                textTransform: "uppercase",
                                fontWeight: "500"
                            }}>
                                {data[0]?.name}
                            </p>
                            <p style={{
                                fontFamily: "open_sansregular,sans-serif",
                                fontSize: "16px", lineHeight: "1.42857", color: "#222", fontWeight: "700"
                            }}>
                                {data[0]?.title}
                            </p>
                            <p style={{
                                fontFamily: "open_sansregular,sans-serif",
                                fontSize: "16px", 
                                color: "#454545",
                                lineHeight: "1.42857"
                            }}>
                                {data[0]?.bio}
                            </p>
                        </>)

                    }



                </div>

            </div>


            <div style={{ backgroundColor: "#f7f6f2", padding: "0 10%", display: "flex", justifyContent: "space-around", height: "155px" }}>
                <Swiper modules={[Navigation, EffectFade]}
                    navigation
                    effect
                    speed={800}
                    slidesPerView={3}
                    loop>
                    
                    {data.map((info, index) => {
                        return (
                    
                            <SwiperSlide style={{ 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center", 
                                cursor: "pointer", 
                                width: "100px" 
                                }}
                                key={info.id}
                                onClick={(e) => {
                                    handleClick(
                                        e, info.name, info.title, info.bio, info.image, index
                                    )
                                }}
                            >


                                <div >
                                    <img style={{ borderRadius: "50%", marginRight: "10px" }} height="70" width="70" src={info.image} />

                                </div>

                                <div>
                                    <p style={{ color: "#4b2e83", fontWeight: "500" }}>{info.name}</p>
                                </div>

                        
                            </SwiperSlide>

                        )

                    })}
                </Swiper>

            </div>


        </>
    )
}

export default MeetTheInstructors