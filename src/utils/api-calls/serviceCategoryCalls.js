
import {server} from '../fetch';

export const fetchServiceCategory = async() =>{
   

    const res2 = await fetch(`${server}/serviceCategory`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const serviceCategory = await res2.json()

   

 return serviceCategory
}