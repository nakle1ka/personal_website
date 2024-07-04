import { useRef } from "react";

import Header from "./components/UI/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Animation from "./components/animation/Animation/Animation";

import "./styles/restart.css"
import "./styles/style.css"

import logoSvg from "./images/logo.svg"

function App() {
  const aboutRef = useRef()
  const skillRef = useRef()
  const portfolioRef = useRef()
  // const contactsRef = useRef()

  return (
    <>
      <Header logo={logoSvg} refs={[aboutRef, skillRef, portfolioRef]} />
      <main>
        <About aboutRef={aboutRef} />
        <Skills skillRef={skillRef} />
        <Portfolio portfolioRef={portfolioRef} />
      </main>

      <Animation />
    </>
  );
}

export default App;
