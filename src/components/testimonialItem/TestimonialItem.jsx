import React from 'react'
import './styles.css'
import UserImage from '../../assets/images/5.webp'
const TestimonialItem = (props) => {
    const { arrowRight, type } = props
    return (
        <div className="testimonial-itemcontainer item" >
            <div className="testimonial-text" style={{ background: `${type ? "white" : '#2b9123'}`, color: `${type ? "green" : "white"}` }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and
            </div>
            {/* style={{right:`${arrowRight? '0px' : null}`, left:`${arrowRight? null : '0px'}`}}> */}
            {/* style={{justifyContent:`${arrowRight? 'flex-end' : 'flex-start'}`}} */}
            <div className="testimonial-arrow" style={{ borderTop: `25px solid ${type ? "white" : '#2b9123'}`}}></div>
            <div className="testimonial-user" style={{color:`${type? 'white' : "intial"}`}} >
                <div className="testimonial-image">
                    <img src={UserImage} alt="Testimonial User" />
                </div>
                <div className="testimonial-user-info" >
                    <div className="testimonial-user-name">ALice Spencer</div>
                    <div className="testimonial-user-company">CEO, Nexus</div>

                </div>
            </div>
        </div>
    )
}


export default TestimonialItem;