import React from "react";

// Import local files
import { Container } from "../pagesElement/HomeElement";
import Annnouncement from "../components/Annnouncement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <Container>
      <Annnouncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Home;
