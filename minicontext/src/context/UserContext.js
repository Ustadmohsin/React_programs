import React from "react";

const UserContext = React.createContext()

export  default UserContext;






// import React, { createContext, useState } from "react";

// // Create a new context
// const UserContext = createContext();

// // Context Provider component
// const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (username) => setUser({ username });
//   const logout = () => setUser(null);

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export { UserContextProvider, UserContext };
