import "./App.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CardCarousel from "./components/CardCarousel";
import Description from "./components/Description";
import Overline from "./components/Overline";
import About from "./components/About";
import NFTdivider from "./components/NFTdivider";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <CardCarousel />
      <Description />
      <Overline />
      <About />
      <NFTdivider />
      <Footer />
    </>
  );
}

export default App;
