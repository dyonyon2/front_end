import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";

function App() {
  return (
    // Redirect
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
