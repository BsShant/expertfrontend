
import {server} from '../fetch';

export const fetchFundCategory = async() =>{
   

    const res2 = await fetch(`${server}/fundRaiserCategory`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const fundCategory = await res2.json()

   

 return fundCategory
}