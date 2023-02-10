import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import User from "./userProfile/User";
import Home from "./components/Home";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f5f5f5" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
