import React, {useState, useContext} from 'react'
import UserContext from "../context/UserContextProvider"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login




// import React, { useState, useContext } from "react";
// import { UserContext } from "../context/UserContext";

// function Login() {
//   const [username, setUsername] = useState("");
//   const { login } = useContext(UserContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!username) {
//       alert("Please enter a username!");
//       return;
//     }
//     login(username);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter username"
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
