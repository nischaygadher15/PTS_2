import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import ContextProvider from "./Context/AppContext";

function App() {
  return (
    <>
      <ContextProvider>
        <Layout>
          <Outlet />
        </Layout>
      </ContextProvider>
    </>
  );
}

export default App;
