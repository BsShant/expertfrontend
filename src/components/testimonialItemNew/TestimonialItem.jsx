import React from 'react'
import './styles.css'
import UserImage from '../../assets/images/elon.jpeg'
const TestimonialItemNew = (props) => {
    const { arrowRight, type } = props
    return (
        <div className="item">

            <div className="new-test" >
                <div className="row test-width">
                    <div className="col-md-4">
                        <div className={`new-test-image ${type=='about'? 'testmonial-alternate' :''}`}>
                            <img src={UserImage} alt="Testimonial User" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className={`test-text-detail`}>
                            <div className={`test-text-info ${type==='about'? 'testmonial-alternate' :''}`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                            </div>
                            <div className={`test-user-name ${type==='about'? 'testmonial-alternate' :''}`}>ALice Spencer</div>
                            <div className={`testuser-role ${type==='about'? 'testmonial-alternate' :''}`}>CEO, Nexus</div>
                    </div>
                    </div>
                </div>
            </div >
        </div>
    )
}


export default TestimonialItemNew;