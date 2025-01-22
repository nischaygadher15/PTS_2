import { createContext, useState } from "react";

// App Context
export const AppContext = createContext();

// Context Provider
let ContextProvider = ({ children }) => {
  //App Store
  let [store, setStore] = useState({
    name: "Nischay",
  });
  return (
    <AppContext.Provider value={{ store, setStore }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
