import  React, { useEffect, useState } from "react"

const APIDATA="https://dummyjson.com/users"

function SecData()
{
const[Old,Fresh]=useState([])


const fatchData=async(url)=>
{ try{
    const res=await fetch(url);
    const data=await res.json();
    console.log(data)
if(data.length>0)
{
    Fresh(data);
}

      } catch(err)
          {
    console.log(err);
          }
}


useEffect(()=>
{
    fatchData(APIDATA);
} ,[])




    return(
 <div>
    <h2>
        third api data Fetch
    </h2>

<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>

        </tr>
    </thead>
    <tbody>
        { Old.map((currentsatte)=>
        {
            const{id,firstName,lastName,email,phone}=currentsatte;
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                </tr>
            )
        })}
    </tbody>
</table>

 </div>
    )
}

export default SecData