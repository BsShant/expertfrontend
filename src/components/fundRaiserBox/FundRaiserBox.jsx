import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const FundRaiserBox = (props) => {
    const {image, title, category} = props
    
    return (
        
        <Link to='/fund-raiser/project-page' className='fund-raiser-box-link'>
        
        <div className="fund-raiser-box">
            <div className="fund-raiser-image">
                <img src={image} alt="Climate Change" />
            </div>
            <div className="fund-raiser-description">
                <div className="fund-raiser-type">{category}</div>
                <div className="fund-raiser-title">{title}</div>
                <div className="fund-raiser-info">This project aims to plant thousand trees
                    as well as create awareness and motivation for carbon net zero.</div>
            </div>
            <div className="funding-section">
                <div className="funding-collected">
                    <div className="funding-raised-left">Rs. 12000 raised</div>
                    <div className="funding-raised-right">80%</div>
                </div>
                <div className="funding-bar">
                    <div className="funding-inner-bar"></div>
                </div>
            </div>
            <div className="days-left">
                15 days remains
            </div>
        </div>
        </Link>
    )
}

export default FundRaiserBox