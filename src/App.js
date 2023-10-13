import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signin from "./components/Signin";
// import Header from "./components/Header";
import User from "./userProfile/User";
import Home from "./components/homepage/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<User />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
