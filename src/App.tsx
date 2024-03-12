import "./App.css";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Discover from "./pages/Discover";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/discover" element={<Discover />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
