import "./App.css";
import Header from "./components/Header/navbar";
import Headercontent from "./components/Header/content";
import Education from "./components/About/education";
import Projects from "./components/projects/ProjectMain";
import Skills from "./components/skills/skills";
import Certification from "./components/certification.js/certification";
import ContactForm from "./components/contact/form";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Headercontent />
      <Education />
      <Skills />
      <Certification />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
