import React, { createContext, useState } from "react";

const UserContext = createContext(undefined);

const UserContextTypeProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("idToken"));

  return (
    <UserContext.Provider
      value={{ userInformation, setUserInformation, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextTypeProvider };
