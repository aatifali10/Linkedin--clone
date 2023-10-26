import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Header from "./components/Header";
import User from "./userProfile/User";
import Home from "./components/homepage/Home";
import { doc, getDoc } from "firebase/firestore";
import { auth, database } from "./firebase/setup";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    setTimeout(async () => {
      try {
        const userDocument = doc(database, "users", `${auth.currentUser?.uid}`);
        const data = await getDoc(userDocument);
        setUserData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header userData={userData} />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User userData={userData} />}></Route>
          <Route path="/" element={<Home userData={userData} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
