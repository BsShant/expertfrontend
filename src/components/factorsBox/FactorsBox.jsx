import React from 'react'
import './styles.css'
const FactorsBox = (props) => {
    const { image, title, detail } = props
    return (
        <div className="factors-box">
            <div className="factors-image s8">
                <img src={image} alt={title} />
            </div>
            <div className="factors-title">{title}</div>
            <div className="factors-text">
                {detail}
            </div>
        </div>
    )
}

export default FactorsBox