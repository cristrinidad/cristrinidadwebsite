import NavBar from "../components/NavBar";
import Home from "./Home";
import "../stylesheets/App.css";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import LatestWorks from "../components/LatestWorks";

function App() {
  return (
    <>
      <div className="container-fluid">
        <section id="home">
          <NavBar />
          <Home />
          <br />
        </section>
      </div>

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
