import React, { useEffect, useState } from "react";
const Dataf="https://jsonplaceholder.typicode.com/users"

function Dataapi()
{
   const[New,Old] =useState([])

const fetchData= async (url)=>
 {
try
{
 const res= await fetch(url);
 const Store= await res.json()
 if(Store.length>0)
 {
Old(Store)
 }
 console.log(Store);
} catch(err)
{
    console.log(err)
}
}
 
    useEffect(()=>
    {
        fetchData(Dataf)
    },[])





    return(
        <div>
            <h2> 2nd API DATA</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    New.map((currData)=>
                    {
                        const {id ,name,email,address}=currData;
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{address.city}</td>

                            </tr>
                        )
                    })
                   }
                </tbody>
            </table>
        </div>
    )
}
export default Dataapi




