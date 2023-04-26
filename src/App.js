import "./App.css";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>

    </>
  );
}

export default App;
