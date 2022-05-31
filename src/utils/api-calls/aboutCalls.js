
import {server} from '../fetch';



export const fetchAbout = async() =>{
   

    const res2 = await fetch(`${server}/about`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const about = await res2.json()

   

 return about
}

export const fetchLandingService = async() =>{
   

    const res2 = await fetch(`${server}/landingService`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const landingService = await res2.json()

   

 return landingService
}