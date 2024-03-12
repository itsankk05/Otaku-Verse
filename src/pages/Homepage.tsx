// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Banner from "../components/Banner";
import CardCarousel from "../components/CardCarousel";
import Description from "../components/Description";
import Overline from "../components/Overline";
import About from "../components/About";
import NFTdivider from "../components/NFTdivider";

export default function Homepage() {
  return (
    <div>
      <Banner />
      <CardCarousel />
      <Description />
      <Overline />
      <About />
      <NFTdivider />
    </div>
  );
}
