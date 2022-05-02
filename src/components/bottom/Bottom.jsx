import React from 'react'
import './styles.css'
const Bottom = (props) => {
    const { naa } = props

    return (
        <div className={`bottom-container ${naa? 'snap-y' : ""}`}>
            <div className="container">
                <div className="bottom-inner-container">
                    Copyright © 2022 all rights reserved | This website is made by<br />
                    LOGIN Corporation
                </div>
            </div>
        </div>
    )
}

export default Bottom