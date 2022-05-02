import React from 'react'
import './styles.css'
import ClimateChange from '../../assets/images/climateChange.jpeg'

const ProjectPage = () => {
    return (
        <div className='project-page-container'>
            <div className="container">
                <div className="project-page-inner-container">
                    <div className="row">
                        <div className="col-lg-7" style={{marginBottom:"40px"}}>
                            <div className="project-page-image-container">
                                <img src={ClimateChange} alt="Climate change" />
                            </div>
                            <div className="project-title col-lg-0 col-xl-0">
                                Fund raiser for climate change
                            </div>
                            <div className="project-page-text">
                                This project aims to plant thousand trees
                                as well as create awareness and motivation for carbon net zero.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="project-category">Environment</div>
                            <div className="project-title">
                                Fund raiser for climate change
                            </div>
                            <div className="people-supported">15 People have supported our project</div>
                            <div className="progress-container">
                                <div className="funding-collected">
                                    <div className="funding-raised-left">Rs. 12000 raised</div>
                                    <div className="funding-raised-right">80%</div>
                                </div>
                                <div className="funding-bar">
                                <div className="funding-inner-bar"></div>
                                </div>
                                <div className="days-left">
                                    15 days remains
                                </div>
                                
                            </div>
                            <div className="support-container">
                                <button className='alternate-button'>Support</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage