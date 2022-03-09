import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import Header from "./components/Header/Header";

import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";
function App() {
  const getUser = useSelector(selectUser);
  return (
    <div className="App">
      {getUser ? (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
