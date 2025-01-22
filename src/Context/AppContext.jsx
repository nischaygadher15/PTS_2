import { createContext, useEffect, useState } from "react";

// App Context
export const AppContext = createContext();

// Context Provider
let ContextProvider = ({ children }) => {
  //App Store
  let [isLoading, setLoading] = useState(true);

  let pageLoading = () => {
    let start = Date.now();
    window.addEventListener("load", () => {
      let end = Date.now();
      if (end - start < 2000) {
        setTimeout(() => setLoading(false), 2000);
      } else {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    if (isLoading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isLoading]);

  return (
    <AppContext.Provider value={{ isLoading, setLoading, pageLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
