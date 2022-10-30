import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import SavedRecipes from "./components/SavedRecipes";
import RecipeCard from "./components/RecipeCard";

import { Routes, Route } from "react-router-dom";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  console.log(userInfo);

  const checkIfLoggedIn = () => {
    fetch("http://localhost:3300/user/me", {
      headers: { "content-type": "application/json" },
      credentials: "include",
    })
      .then((result) => result.json())
      .then(setUserInfo);
  };

  const signOut = () => {
    fetch("http://localhost:3300/user/signout", {
      credentials: "include",
      headers: { "content-type": "application/json" },
    }).then(() => setUserInfo(null));
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <>
      <NavBar userInfo={userInfo} signOut={signOut} />
      <Routes>
        <Route
          path="/login"
          element={<Login checkIfLoggedIn={checkIfLoggedIn} />}
        />
        <Route path="/" element={<Home userInfo={userInfo} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/register"
          element={<Register checkIfLoggedIn={checkIfLoggedIn} />}
        />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/savedrecipes" element={<SavedRecipes />} />
        <Route path="/recipecard" element={<RecipeCard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
