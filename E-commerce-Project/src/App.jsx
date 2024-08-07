import Routing from "./Routing";
import { LoginContextProvider } from "./contexts/loginContext";
import { RedirectProvider } from "./contexts/RedirectContext";

const App = () => {
  return (
    <>
      <RedirectProvider>
        <LoginContextProvider>
          <Routing />
        </LoginContextProvider>
      </RedirectProvider>
    </>
  );
};

export default App;
