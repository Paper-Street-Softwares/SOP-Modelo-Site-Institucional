import React from "react";
import Navbar from "../../Institucional/Navbar";
import ConteudoAbout from "./ConteudoAbout";
import Footer from "../../Institucional/Footer";

function RotaAbout({ colorMode }) {
  return (
    <div>
      <Navbar />
      <ConteudoAbout colorMode={colorMode} />
      <Footer />
    </div>
  );
}

export default RotaAbout;
