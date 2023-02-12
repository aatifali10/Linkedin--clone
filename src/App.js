import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import User from "./userProfile/User";
import Home from "./components/homepage/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
