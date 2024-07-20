import Header from "./components/UI/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Animation from "./components/animation/Animation/Animation";

import "./styles/restart.css"
import "./styles/style.css"

import logoSvg from "./images/logo.svg"

function App() {
  return (
    <>
      <Header logo={logoSvg} />
      <main>
        <About />
        <Skills />
        <Portfolio />
        <Contacts />
      </main>

      <Animation />
    </>
  );
}

export default App;
