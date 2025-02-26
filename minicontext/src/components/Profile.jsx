// import React,{useContext} from 'react'
// import UserContext from '../context/UserContext'

// function Profile() {
//     const{user} = useContext(UserContext)
//      if(!user) return <div>please login</div>

//      return <div>Welcome {user.username}</div>

  
// }

// export default Profile



import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user, logout } = useContext(UserContext);

  if (!user) return <div>Please log in</div>;

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
