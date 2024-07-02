import Header from "./components/UI/Header/Header";
import Animation from "./components/animation/Animation/Animation";

import "./styles/restart.css"
import "./styles/style.css"

import logoSvg from "./images/logo.svg"

function App() {

  return (
    <>
      <Header logo={logoSvg}/>
      <main>

      </main>

      <Animation />
    </>
  );
}

export default App;
