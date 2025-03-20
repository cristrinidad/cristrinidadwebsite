import NavBar from "../components/NavBar";
import Home from "./Home";
import "../stylesheets/App.css";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import LatestWorks from "../components/LatestWorks";
import Skills from "../components/Skills";

function App() {
  return (
    <>
      <div className="background">
        <section id="home">
          <NavBar />
          <Home />
          <br />
        </section>
      </div>

      <section id="skills">
        <Skills />
      </section>

      <section id="latest-works">
        <LatestWorks />
      </section>

      <section id="work-experience">
        <WorkExperience />
      </section>
      <br></br>
      <div className="footer">
        <section id="contact" className="">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
