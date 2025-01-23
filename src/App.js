import { APIProvider } from "@vis.gl/react-google-maps";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppContent from "./components/AppContent";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <APIProvider
      apiKey={process.env.REACT_APP_GOOGLEPLACES_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <div className="w-[100%] h-[100vh]">
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </APIProvider>
  );
}

export default App;
