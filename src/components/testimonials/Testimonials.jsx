import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import TestimonialItem from '../testimonialItem/TestimonialItem'
import './styles.css'
import ClientBackground from '../../assets/images/clientBackground.webp'
import TestimonialItemNew from '../testimonialItemNew/TestimonialItem'
const Testimonials = (props) => {
    return (
        <section className="testimonial-container snap-y" style={{background:`${props.type? '#2b9123': `url(${ClientBackground})`}`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} >
            {/* style={{background:`${props.type? '#2b9123': `url(${ClientBackground})`}`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} */}
            <div className="container">
                <div className="testimonial-inner-container">
                    <div className="testominal-headings">
                        <div className="top-title" style={{color:`${props.type? "white" : "#2b9123"}`}}>Testimonials</div>
                        <div className="heading"  style={{color:`${props.type? "white" : "black"}`}}>What our clients are saying about us?</div>
                        {/* <div className="details">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and.
                        </div> */}
                    </div>
                    <OwlCarousel className='owl-theme' loop={true} margin={30} autoPlay={true} items={1} nav={false} 
                    responsiveClass={true} responsive={{
                        0: {
                            items: 1,
                            autoplay: true
                        },
                        768: {
                            items: 1,
                            autoplay: true
                        },
                        992: {
                            items: 1,
                            autoplay: true
                        }
                    }}>
                        <TestimonialItemNew type={props.type}/>
                        <TestimonialItemNew type={props.type} />
                        <TestimonialItemNew type={props.type}/>
                        <TestimonialItemNew type={props.type}/>
                        <TestimonialItemNew type={props.type}/>
                        <TestimonialItemNew type={props.type} />

                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Testimonials