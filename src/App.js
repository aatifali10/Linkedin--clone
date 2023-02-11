import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import User from "./userProfile/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
