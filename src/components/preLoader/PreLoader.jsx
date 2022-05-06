import React, { useEffect, useState } from 'react'
import './styles.css'
const PreLoader = () => {
    const [preLoader, setPreLoader] = useState(true)
    useEffect(()=>{
            setTimeout(()=>{
                setPreLoader(false)
            },[5000])
    },[])
    return (


        <div className={`preloader ${!preLoader? 'nullState' : ""}`}>
            <div className="loader"></div>
        </div>


    )
}

export default PreLoader