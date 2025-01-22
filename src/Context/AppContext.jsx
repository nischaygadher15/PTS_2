import { createContext, useEffect, useState } from "react";

// App Context
export const AppContext = createContext();

// Context Provider
let ContextProvider = ({ children }) => {
  //App Store
  let [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isLoading]);

  return (
    <AppContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
