import { useRef } from "react";

import Header from "./components/UI/Header/Header";
import About from "./components/About/About";
import Animation from "./components/animation/Animation/Animation";

import "./styles/restart.css"
import "./styles/style.css"

import logoSvg from "./images/logo.svg"
import Skills from "./components/Skills/Skills";

function App() {
  const aboutRef = useRef()
  const skillRef = useRef()
  // const portfolioRef = useRef()
  // const contactsRef = useRef()

  return (
    <>
      <Header logo={logoSvg} refs={[aboutRef, skillRef]}/>
      <main>
        <About aboutRef={aboutRef}/>
        <Skills skillRef={skillRef}/>
      </main>

      <Animation />
    </>
  );
}

export default App;
