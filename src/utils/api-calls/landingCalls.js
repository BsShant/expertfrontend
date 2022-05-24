
import {server} from '../fetch';

export const fetchLandingHero = async() =>{
   

    const res2 = await fetch(`${server}/landingHero`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const landingHero = await res2.json()

   

 return landingHero
}

export const fetchLandingAbout = async() =>{
   

    const res2 = await fetch(`${server}/landingAbout`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const landingAbout = await res2.json()

   

 return landingAbout
}

export const fetchLandingService = async() =>{
   

    const res2 = await fetch(`${server}/landingService`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const landingService = await res2.json()

   

 return landingService
}