import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import StatsCard from '../statCards/StatsCard'
import './styles.css'
const colors = [
    {
        background: "#8c99b1",
        color: "white"
    },
    {
        background: "#f7c942",
        color: "white"
    },
    {
        background: "#6dc8ec",
        color: "white"
    },
    {
        background: "#5ad8a6",
        color: "white"
    }
]
const StatsCardsContainer = () => {
    return (
        <div className='stats-cards-container mt-4'>
            <div className="row stats-row" style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-6 col-sm-3 mb-3">
                    <StatsCard color={colors[0].color} background={colors[0].background} icon={<FontAwesomeIcon icon={faCog} />} title="7" body="Services" />
                </div>
                <div className="col-6 col-sm-3 mb-3">
                    <StatsCard color={colors[1].color} background={colors[1].background} icon={<FontAwesomeIcon icon={faCog} />} title="6" body="Products" />
                </div>
                <div className="col-6 col-sm-3 mb-3">
                    <StatsCard color={colors[2].color} background={colors[2].background} icon={<FontAwesomeIcon icon={faCog} />} title="7" body="Fund Raisers" />
                </div>
                <div className="col-6 col-sm-3 mb-3">
                    <StatsCard color={colors[3].color} background={colors[3].background} icon={<FontAwesomeIcon icon={faCog} />} title="10" body="Inquiry" />
                </div>

            </div>

        </div>
    )
}

export default StatsCardsContainer