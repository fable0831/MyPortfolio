import Portfolio from "components/Portfolio";
import ScrollToTop from "components/ScrollToTop";
import React from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "components/Footer";
import GlobalStyle from "GlobalStyle";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <GlobalStyle />
      <ScrollToTop />
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
