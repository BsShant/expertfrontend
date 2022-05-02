import React from "react"
import BusinessImage from '../../assets/images/5.webp'
import './styles.css'
const ChooseUs = (props) => {
    const { odd, title, detail, image } = props
    return (
        <div className="choose-us-container">
            <div className="container" style={{ height: "100%" }}>
                <div className="choose-us-inner-container">
                    <div className="row choose-text-row" style={{ height: "100%" }}>
                        <div className={`col-sm-12 col-xs-12 col-md-6 ${odd ? 'order-md-last' : 'order-md-first'} order-sm-last choose-us-text-col`}>
                            <div className="choose-us-text-container" data-aos="fade-right"
                                data-aos-easing="ease-in-sine">
                                {/* <div className="choose-us-text-container-top-title">Why choose Expert?</div> */}
                                <div className="choose-us-text-container-heading">{title}</div>
                                <div className="choose-us-text-container-detail">
                                    {detail}
                                </div>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-xs-12 col-md-6 ${odd ? 'order-md-first' : 'order-md-last'} order-sm-first choose-us-image-col`} style={{ height: "100%" }}>
                            <div className="choose-us-image-container">
                                <img src={image} alt="Business" data-aos="fade-left"
                                    data-aos-easing="ease-in-sine" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChooseUs;