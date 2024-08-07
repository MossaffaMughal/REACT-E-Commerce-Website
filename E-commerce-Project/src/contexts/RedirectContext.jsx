import { createContext, useState } from "react";

const RedirectContext = createContext();

const RedirectProvider = (props) => {
  const [redirectPath, setRedirectPath] = useState("/");

  return (
    <RedirectContext.Provider value={{ redirectPath, setRedirectPath }}>
      {props.children}
    </RedirectContext.Provider>
  );
};

export { RedirectProvider, RedirectContext };
