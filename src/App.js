import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import User from "./userProfile/User";
// import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                {/* <Home /> */}
                <User />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
