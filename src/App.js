// import axios from "axios";
// import React, { useEffect, useState } from "react"
// import Mongo from "./Mongo";
// import Dataapi from "./Dataapi"
import SecData from "./SecData";

export default function App() {


  return (
    <div>
      {/* <Mongo/> */}
      <br />
      <br />
    {/* <Dataapi/> */}
    <br />
      <br />
      <SecData/>
    </div>
  );
  }





// //  const [users, setUsers] = useState([])

//   const fetchUserData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//       .then((d) => setUsers(d))
//   }

//   useEffect(() => {
//     fetchUserData()
//   }, [])

//   return (
//     <div>
//       {users.length >= 1 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.name}>{user.id}</li>
//           ))}
//         </ul>
//       )}
