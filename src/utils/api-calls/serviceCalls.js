
import {server} from '../fetch';

export const fetchService = async() =>{
   

    const res2 = await fetch(`${server}/service`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const service = await res2.json()

   

 return service
}