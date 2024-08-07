import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [loginDetails, setLoginDetails] = useState([]);

  return (
    <LoginContext.Provider value={{ loginDetails, setLoginDetails }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContextProvider, LoginContext };
