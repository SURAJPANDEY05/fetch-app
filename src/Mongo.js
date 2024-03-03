//  1st pehlehum ne React ko import kiya or fir useEffect ko Import kya
import React, { useEffect, useState } from "react";
//  3rd step me ek varABLE bnaya or uske ander ek 
// linke store kr diya or usko useEFFect ke ander function me as a  argument pass kr diya
const API="https://jsonplaceholder.typicode.com/users";
// step 0 me ke function bnaya
function Mongo()
{
//  5th abb ya per useState chla ye ge tha ki hum State ko Change Kre ske 
const [user,setUser]=useState([])

  
//  4th step jo hum ne useEffect ke ander me ek function ko bnaya tha usko define kere ge
const fetchUser= async(url)=>
{
  try {
   const res = await fetch(url);
   const data=  await res.json();
  //   6th me hum ek condition lgaye ge or value ko pass kr ne ke liye
  if(data.length>0)
  {
    //  7th me value ko pass kr diya condition true hone per
    setUser(data);
  }
   console.log(data)
      }catch (err){
                    console.log(err);
                  }
}
//  2nd step aya per ek useEffect bnaya or uske ander me function ko call kiya 
useEffect(()=>
{
  // finction ko bnaya or call koya
fetchUser(API)

},[])

  return(
<div>
<h1> this is api Data 1st </h1>
<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Address (street)</th>
    </tr>
  </thead>
  <tbody>
{user.map(
           (currUser)=>  {
                           const {id, name , email}=currUser;
                          const { city,street,zipcode}=currUser.address
    return  (             
                    <tr key={id}>
                       <td>{id}</td>
                       <td>{name}</td>
                       <td>{email}</td>
                       <td> {city}{street}{zipcode}</td>


                    </tr>
            )
                        }
    )
}
  </tbody>
</table>

</div>

  )
}
export default Mongo