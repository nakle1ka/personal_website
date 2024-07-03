import Header from "./components/UI/Header/Header";
import About from "./components/About/About";
import Animation from "./components/animation/Animation/Animation";

import "./styles/restart.css"
import "./styles/style.css"

import logoSvg from "./images/logo.svg"

function App() {

  return (
    <>
      <Header logo={logoSvg}/>
      <main>
        <About />
      </main>

      <Animation />
    </>
  );
}

export default App;
