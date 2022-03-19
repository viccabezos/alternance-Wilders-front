import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import NewWilder from "./pages/NewWilder";
import NavBar from "./components/navbar/navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<NewWilder />} />
          <Route path="wilder/:id" element={<Profile />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
