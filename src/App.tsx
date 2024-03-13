import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Discover from "./pages/Discover";

import { useAccount } from "wagmi";

import AvailableNFT from "./pages/AvailableNFT";
function App() {
  const { address, isConnected } = useAccount();
  console.log(address, isConnected);

  return (
    <>
      <div>{address ?? "Loading address"}</div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/dashboard"
            element={isConnected ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route path="/discover" element={<Discover />}></Route>
          <Route path="/available-nft/:id" element={<AvailableNFT />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
