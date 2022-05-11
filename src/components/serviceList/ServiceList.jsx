import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles.css'

const ServiceList = (props) => {
    const { point } = props
    return (
        <div className="key-point-list-item">
            <FontAwesomeIcon icon={faCircle} />
            {point}
        </div>
    )
}

export default ServiceList