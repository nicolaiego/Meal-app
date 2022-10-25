import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Welcome from "./components/Welcome";


function App() {
  const [userInfo, setUserInfo] = useState(null);

  console.log(userInfo);

  const checkIfLoggedIn = () => {
    fetch("http://localhost:3300/user/me", {
      headers: { "content-type": "application/json" },
      credentials: "include",
    })
      .then((result) => result.json())
      .then((result) => {
        if (result.loggedIn !== userInfo?.loggedIn) {
          setUserInfo(result);
        }
      });
  };

  const signOut = () => {
    fetch("http://localhost:3300/user/signout", {
      credentials: "include",
      headers: { "content-type": "application/json" },
    }).then(() => setUserInfo(null));
  };

  checkIfLoggedIn();
  useEffect(() => setInterval(checkIfLoggedIn, 5000), []);

  return (
    <div>
      <NavBar />
      {userInfo?.loggedIn ? (
        <Welcome name={userInfo?.name} signOut={signOut} />
      ) : (
        <Register checkIfLoggedIn={checkIfLoggedIn} />
      )}
      <Home />
      <About />
      <Recipes />
      <Contact />

    </div>
  );
}

export default App;
