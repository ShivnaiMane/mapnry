import React, { useEffect, useState } from "react";
import Home from "./Home";
import SignUp from "./SignUp";
import { auth } from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AppContent = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, []);
  return <>{currentUser ? <Home /> : <SignUp />}</>;
};

export default AppContent;
